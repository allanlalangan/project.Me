import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/authSlice'
import styles from './LoginForm.module.css'
import Button from '../UI/Button/Button'

const LoginForm = () => {
  const dispatch = useDispatch()

  const initialFormData = {
    email: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(formData))
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <input
          onChange={onInputChange}
          className={`${styles['form-control']} ${styles['email-field']}`}
          type='text'
          id='email'
          name='email'
          placeholder={'Enter email'}
        />
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input
          onChange={onInputChange}
          className={`${styles['form-control']} ${styles['pass-field']}`}
          type='text'
          id='password'
          name='password'
          placeholder={'Enter password'}
        />
      </fieldset>

      <Button className={`${styles['login-btn']}`} type='submit'>
        Login
      </Button>
    </form>
  )
}

export default LoginForm
