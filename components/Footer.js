import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import Contact from './Contact'

export default function Footer() {
  
  return (
    <footer id='contact' className={styles.container}>
      <Contact />
      <div className={styles.centre}>
        <div className={styles['contact-info-box']}>
          <div>
            <p>45 Road Street</p>
            <p>Unit 3</p>
            <p>London, England <br></br>ABC DE1</p>
            <p>info@company.com</p>
            <p>+44 712 345 678</p>
          </div>
          <div className={styles.socials}>
            <Image 
              src='/fb.svg'
              alt='Facebook'
              height={20}
              width={20}
            />
            <Image 
              src='/ig.svg'
              alt='Instagram'
              height={20}
              width={20}
            />
            <Image 
              src='/in.svg'
              alt='LinkedIn'
              style={{ color: 'black'}}
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}