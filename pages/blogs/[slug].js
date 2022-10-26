import Layout from '../../components/Layout'
import { API_URL } from '../../config'
import styles from '../../styles/BlogMain.module.css'
import ReactMarkdown from 'react-markdown'
import BlogCard from '../../components/BlogCard'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function BlogPage({ blog, otherBlogs }) {

  const blogText = blog.attributes.content

  const [previewBlogs, setBlogs] = useState([])

  useEffect(() => {
    const narrowWidth = window.matchMedia('(max-width: 918px)').matches
    narrowWidth ? setBlogs(otherBlogs.slice(1)) : setBlogs(otherBlogs)
  }, [otherBlogs])

  return (
    <Layout 
      isHome={false} 
      blog={blog}
      title={blog.attributes.name}
    >
      <div className={styles.container}>
        <main className={styles.body}>
          <ReactMarkdown>{blogText}</ReactMarkdown>
          <p>By {blog.attributes.Author}</p>
          <p>{blog.attributes.date}</p>
        </main>
        
        <Link href='/'>
            <a className={styles.btn}>
                <span>Back To Home</span>
            </a>
          </Link>
      </div>
      <div className={styles['preview-container']}>
        {previewBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Layout>
  )
}


export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/blogs`)
  const { data: blogs } = await res.json()

  const paths = blogs.map(blog => {
    return {
      params: { slug: blog.attributes.slug }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params: { slug } }) {
  
  const res = await fetch(`${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`)
  const { data } = await res.json()
  const blog = data[0]

  const res2 = await fetch(`${API_URL}/api/blogs?pagination[page]=1&pagination[pageSize]=3&populate=*&sort[0]=date%3Adesc&filters[slug][$notContains]=${slug}`)
  const { data: otherBlogs } = await res2.json()

  return {
    props: {
      blog,
      otherBlogs
    },
    revalidate: 62,
  }
}
