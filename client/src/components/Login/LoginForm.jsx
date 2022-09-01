// IMPORT

// useLogin hook
import useLogin from './useLogin';
// styles and ui
import styles from './LoginForm.module.scss';
// custom components
import InputControlText from '../Input/InputControlText';

///

const LoginForm = () => {
  const { onInputChange, handleLogin } = useLogin();

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2 className={styles['login-heading']}>User Login</h2>

      <fieldset className={styles['fieldset']}>
        <div className={styles['form-controls']}>
          <InputControlText
            type='email'
            onChange={onInputChange}
            for='email'
            label='Email'
            placeholder='Enter email'
          />
          <InputControlText
            type='password'
            onChange={onInputChange}
            for='password'
            label='Password'
            placeholder='Enter password'
          />
        </div>
      </fieldset>
      <button className={`${styles['login-btn']}`} type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
