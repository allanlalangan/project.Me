import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './RegisterForm.module.css'

import Button from '../UI/Button'
import { register, reset } from '../../features/authSlice'

const RegisterForm = () => {
  const dispatch = useDispatch()

  const initialFormData = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  const { name, email, password, passwordConfirm } = formData

  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(formData)

    if (password !== passwordConfirm) {
      console.log('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
      dispatch(reset)
      setFormData(initialFormData)
    }
  }

  return (
    <form onSubmit={handleRegister} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
        <label className={styles.label} htmlFor='name'>
          Name
        </label>
        <input
          className={`${styles['form-control']} ${styles['name-field']}`}
          type='text'
          id='name'
          name='name'
          onChange={onInputChange}
          placeholder={'Enter Name'}
        />
        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <input
          className={`${styles['form-control']} ${styles['email-field']}`}
          type='email'
          id='email'
          name='email'
          onChange={onInputChange}
          placeholder={'Enter email'}
        />
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input
          className={`${styles['form-control']} ${styles['pass-field']}`}
          type='text'
          id='password'
          name='password'
          onChange={onInputChange}
          placeholder={'Enter password'}
        />
        <label className={styles.label} htmlFor='passwordConfirm'>
          Confirm Password
        </label>
        <input
          className={`${styles['form-control']} ${styles['pass2-field']}`}
          type='text'
          id='passwordConfirm'
          name='passwordConfirm'
          onChange={onInputChange}
          placeholder={'Confirm password'}
        />
      </fieldset>

      <Button type='submit'>Create User</Button>
    </form>
  )
}

export default RegisterForm
