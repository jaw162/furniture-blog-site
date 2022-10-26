import styles from '../styles/BlogCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const { markdownToTxt } = require('markdown-to-txt')


export default function BlogCard({ blog }) {

  const { attributes: b } = blog
  const { formats: images } = b.image.data['0'].attributes
  
  const preview = `${images.small.url}`

  return (
      <Link href={`/blogs/${b.slug}`}>
        <a className={styles['blogcard-container']}>
          <div className={`${styles['blogcard-wrapper']}`}>
            <div className={styles.image}>
                <Image
                  src={preview}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  alt={b.name}
                  unoptimized
                />
            </div>
            <div className={styles.text}>  
                <h3>{b.name}</h3>
                <span>{markdownToTxt(`${b.content.substring(0, 100)}...`)}</span>
            </div>
            <div className={styles.author}>
                <p>{b.Author}<br></br>{b.date}</p>
            </div>
          </div>
        </a>
      </Link>
  )
}