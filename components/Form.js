import styles from '../styles/Form.module.css'
import { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import btnStyle from '../styles/Button.module.css'

export default function Form() {
  const [form, setValues] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    business: '',
    message: '',
  })

  const [fieldStyle, setStyle] = useState({
    name: {},
    email: {},
    website: {},
    phone: {},
    business: {},
    message: {},
  })

  const [reqFields, setWarning] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleReqChange = (e) => {
    const { name, value } = e.target
    setValues({...form, [name]: value})
    value ? 
      setWarning({ ...reqFields, [name]: '' }) :
      setWarning({ ...reqFields, [name]: 'Required Field' })
    value ?
      setStyle((prev) => ({
        ...prev, [name]: { borderColor: '#0DC3AD' }
      })) :
      setStyle((prev) => ({
        ...prev, [name]: { borderColor: '#FF8080' }
      }))
  }

  const handleUnreqChange = (e) => {
    const { name, value } = e.target
    setValues({...form, [name]: value})
    value ?
      setStyle({
        ...fieldStyle, [name]: { borderColor: '#0DC3AD' }
      }) :
      setStyle({
        ...fieldStyle, [name]: {}
      })
  }
  
  return (
    <form className={styles.form}>
        <div className={styles['large-field']}>
          <input 
            type="text" 
            name="name"
            style={fieldStyle.name}
            onChange={(e) => handleReqChange(e)}
            onBlur={(e) => handleReqChange(e)}
            required />
            <ErrorMessage message={reqFields.name} />
            <label 
              className={form.name ? `${styles.placeholder} ${styles.hide}` : styles.placeholder}
            >*Name</label>
        </div>

        <div className={`${styles.field} ${styles['padding-right']}`}>
          <input 
            type="text" 
            name="email"
            style={fieldStyle.email}
            onChange={(e) => handleReqChange(e)}
            onBlur={(e) => handleReqChange(e)}
            required />
            <ErrorMessage message={reqFields.email} />
            <label 
              className={form.email ? `${styles.placeholder} ${styles.hide}` : styles.placeholder}
            >*Email</label>
        </div>

        <div className={`${styles.field} ${styles['padding-left']}`}>
          <input 
            type="text" 
            name="website"
            style={fieldStyle.website}
            onChange={(e) => handleUnreqChange(e)}
            onBlur={(e) => handleUnreqChange(e)}
          />
          <label 
            className={form.website ? `${styles.placeholder} ${styles.hide}` : styles.placeholder}
          >Website</label>
        </div>

        <div className={`${styles.field} ${styles['padding-right']}`}>
          <input 
            type="text" 
            name="phone"
            style={fieldStyle.phone}
            onChange={(e) => handleUnreqChange(e)}
            onBlur={(e) => handleUnreqChange(e)}
          />
          <label 
            className={form.phone ? `${styles.placeholder} ${styles.hide}` : styles.placeholder}
          >Phone</label>
        </div>

        <div className={`${styles.field} ${styles['padding-left']}`}>
          <input 
            type="text" 
            name="business"
            style={fieldStyle.business}
            onChange={(e) => handleUnreqChange(e)}
            onBlur={(e) => handleUnreqChange(e)}
          />
          <label 
            className={form.business ? `${styles.placeholder} ${styles.hide}` : styles.placeholder}
          >Business</label>
        </div>
        <a className={btnStyle.btn}>Sign Up</a>
    </form>
  )
}