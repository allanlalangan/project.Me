// IMPORT

// hooks
import { useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../features/authSlice';
// routing
import { useNavigate } from 'react-router-dom';
// styles and ui
import styles from './Register.module.scss';
// custom components
import RegisterForm from './RegisterForm';

///

const Register = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();

  // Select auth state property values
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  // On mount and re-render,
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
    <section className={styles['register-container']}>
      {isLoading ? (
        <h2 className={styles['loading-message']}>Loading</h2>
      ) : (
        <>
          <h2 className={styles['register-heading']}>Register New User</h2>
          <RegisterForm />
        </>
      )}
    </section>
  );
};

export default Register;
