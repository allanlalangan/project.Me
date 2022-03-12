import React from 'react'
import styles from './Login.module.css'

import LoginForm from './LoginForm'

const Login = () => {
  return (
    <section className={styles['login-container']}>
      <h1 className={styles['login-heading']}>User Login</h1>
      <LoginForm />
    </section>
  )
}

export default Login
