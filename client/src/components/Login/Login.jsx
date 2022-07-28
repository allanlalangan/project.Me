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
    <section className={styles['container']}>
      <aside className={styles['login-banner']}></aside>
      {isLoading ? (
        <h2 className={styles['register-msg']}>Loading</h2>
      ) : (
        <>
          <aside className={styles['heading']}>
            <p>This super secret to-do app requires credentials</p>
            <p>Login or create an account to start tracking your goals</p>
          </aside>
          <LoginForm />
        </>
      )}
    </section>
  );
};

export default Login;
