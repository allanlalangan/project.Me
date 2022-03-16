import React from 'react'
import styles from './LoginForm.module.css'
import Button from '../UI/Button'

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <input
          className={`${styles['form-control']} ${styles['email-field']}`}
          type='text'
          id='username'
          placeholder={'Enter email'}
        />
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input
          className={`${styles['form-control']} ${styles['pass-field']}`}
          type='text'
          id='password'
          placeholder={'Enter password'}
        />
      </fieldset>

      <Button type='submit'>Login</Button>
    </form>
  )
}

export default LoginForm
