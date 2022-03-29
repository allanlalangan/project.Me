import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { reset } from '../../features/authSlice'

import styles from './Login.module.css'
import Container from '../UI/Container/Container'

import LoginForm from './LoginForm'

const Login = () => {
  const dispatch = useDispatch()
  const redirect = useNavigate()
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (isSuccess || user) {
      redirect('/dashboard')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, dispatch, redirect])

  return (
    <Container className={styles['login-container']}>
      {isLoading ? (
        <h2 className={styles['register-msg']}>Loading</h2>
      ) : (
        <>
          <h2 className={styles['login-heading']}>User Login</h2>
          <LoginForm />
        </>
      )}
    </Container>
  )
}

export default Login
