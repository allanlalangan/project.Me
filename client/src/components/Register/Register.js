import React from 'react'
import styles from './Register.module.css'
import Card from '../UI/Card'

import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <Card className={styles['register-container']}>
      <h2 className={styles['register-heading']}>Register New User</h2>
      <RegisterForm />
    </Card>
  )
}

export default Register
