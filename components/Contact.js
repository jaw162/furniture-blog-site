import styles from '../styles/Contact.module.css'
import Form from './Form'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>Want to sign up for our Newsletter?</h1>
        <p>We&apos;d love to give you regular updates. Please leave your details below and we&apos;ll get back to you.</p>
      </div>
      <Form />
    </div>
  )
}