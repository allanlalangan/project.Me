// IMPORT

// hooks
import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../features/authSlice';
// routing
import { useNavigate } from 'react-router-dom';
// styles and ui
import styles from './Login.module.scss';
import Container from '../UI/Container/Container';
// custom components
import LoginForm from './LoginForm';

///

const Login = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      redirect('/dashboard');
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, dispatch, redirect]);

  return (
    <Container className={styles['login-container']}>
      <aside className={styles['login-banner']}></aside>
      {isLoading ? (
        <h2 className={styles['register-msg']}>Loading</h2>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </Container>
  );
};

export default Login;
