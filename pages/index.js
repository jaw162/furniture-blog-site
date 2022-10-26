import BlogCard from '../components/BlogCard'
import Layout from '../components/Layout'
import { API_URL } from '../config'
import { useState, useEffect } from 'react'
import styles from '../styles/BlogGrid.module.css'

export default function Home({ latestBlog, rest }) {
  
  const PER_PAGE = 6
  const TOTAL_PAGES = Math.ceil(rest.length / PER_PAGE)

  const [currentPage, setPage] = useState(1)
  const [currentBlogs, setBlogs] = useState([])
  const [pages, setPages] = useState([])
  
  useEffect(() => {
    const pageBlogs = rest.slice((PER_PAGE * currentPage) - PER_PAGE, (PER_PAGE * currentPage))
    setBlogs(pageBlogs)
  }, [currentPage])

  useEffect(() => {
    let pages = Array.from(Array(TOTAL_PAGES), (x, i) => i + 1)
    setPages(pages)
  }, [])

  return (
    <div data-theme='light'>
      <Layout isHome={true} blog={latestBlog}>
        <div id='blogs' className={styles['blog-ref']}>Blogs</div>
        <div className={styles.container}>
          <div className={styles['button-wrapper']}>
            {pages.map(p => (
              <a 
                key={p} 
                onClick={() => setPage(p)}
                className={`${styles['page-button']}
                ${currentPage === p ? styles.active : ''}`}
              >{p}</a>
            ))}
          </div>
          <div className={styles['blogcards-wrapper']}>
            {currentBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/blogs?populate=*&sort[0]=date%3Adesc`)
  const { data: blogs } = await res.json()

  return {
    props: { 
      latestBlog: blogs[0],
      rest: blogs.slice(1, blogs.length)
    },
    revalidate: 62,
  }
}