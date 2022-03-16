import React from 'react'
import styles from './Login.module.css'
import Card from '../UI/Card'

import LoginForm from './LoginForm'

const Login = () => {
  return (
    <Card className={styles['login-container']}>
      <h2 className={styles['login-heading']}>User Login</h2>
      <LoginForm />
    </Card>
  )
}

export default Login
