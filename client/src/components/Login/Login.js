import React from 'react'
import styles from './Login.module.css'

import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-heading']}>User Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login
