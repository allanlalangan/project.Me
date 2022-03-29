import { useEffect } from 'react'
import styles from './Register.module.css'
import Container from '../UI/Container/Container'
import RegisterForm from './RegisterForm'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../../features/authSlice'

const Register = () => {
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
    <Container className={styles['register-container']}>
      {isLoading ? (
        <h2 className={styles['register-msg']}>Loading</h2>
      ) : (
        <>
          <h2 className={styles['register-heading']}>Register New User</h2>
          <RegisterForm />
        </>
      )}
    </Container>
  )
}

export default Register
