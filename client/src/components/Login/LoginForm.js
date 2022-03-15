import React from 'react'
import styles from './LoginForm.module.css'

import Button from '../../UI/Button'

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
        <label className={styles.label} htmlFor='username'>
          Username
        </label>
        <input
          className={styles['form-control']}
          type='text'
          id='username'
          placeholder={'Enter email'}
        />
      </fieldset>

      <fieldset className={styles['form-fieldset']}>
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input
          className={styles['form-control']}
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
