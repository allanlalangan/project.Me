import React from 'react'
import styles from './Register.module.css'

import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <div className={styles['register-container']}>
      <h1 className={styles['register-heading']}>Register New User</h1>
      <RegisterForm />
    </div>
  )
}

export default Register
