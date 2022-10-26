import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/404.module.css'
import btnStyle from '../styles/Button.module.css'

export default function NotFound() {
  return (
    <div className={styles['not-found-hero']}>
        <div className={styles['header-container']}>
            <header className={styles.header}>
              <Link href='/'>
                <div className={styles.logo}>
                    <Image 
                        src='/logo.svg'
                        alt='Company Logo'
                        height={50}
                        width={50}
                        unoptimized
                    />
                </div>
              </Link>
            </header>
        </div>
        <div className={styles.text}>
            <h2>404 | Oops! We couldn&apos;t find that!</h2>
            <Link href='/'>
              <p className={btnStyle.btn}>Back To Home</p>
            </Link>
        </div>
    </div>
  )
}