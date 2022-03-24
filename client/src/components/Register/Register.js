import React from 'react'
import styles from './Register.module.css'
import Card from '../UI/Card'
import RegisterForm from './RegisterForm'

import { useSelector } from 'react-redux'

const Register = () => {
  const isLoading = useSelector((state) => state.auth.isLoading)
  return (
    <Card className={styles['register-container']}>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && (
        <>
          <h2 className={styles['register-heading']}>Register New User</h2>
          <RegisterForm />
        </>
      )}
    </Card>
  )
}

export default Register
