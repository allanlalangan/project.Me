import React from 'react'
import styles from './LoginForm.module.css'

import Button from '../../UI/Button'

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' />
      <label htmlFor='password'>Password</label>
      <input type='text' id='password' />
      <Button type='submit'>Login</Button>
    </form>
  )
}

export default LoginForm
