// IMPORT

// useLogin hook
import useLogin from './useLogin';
// styles and ui
import styles from './LoginForm.module.scss';
import Button from '../UI/Button/Button';
// custom components
import InputControlText from '../Input/InputControlText';

///

const LoginForm = () => {
  const { onInputChange, handleLogin } = useLogin();

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2 className={styles['login-heading']}>User Login</h2>

      <fieldset className={styles['form-fieldset']}>
        <div className={styles['form-controls']}>
          <InputControlText
            type='email'
            onChange={onInputChange}
            for='email'
            label='Email'
            placeholder='Enter email'
            className={`${styles['email-field']}`}
          />
          <InputControlText
            type='password'
            onChange={onInputChange}
            for='password'
            label='Password'
            placeholder='Enter password'
            className={`${styles['pass-field']}`}
          />
        </div>
        <button className={`${styles['login-btn']}`} type='submit'>
          Login
        </button>
      </fieldset>
    </form>
  );
};

export default LoginForm;
