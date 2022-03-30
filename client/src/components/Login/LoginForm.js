// IMPORT

// useLogin hook
import useLogin from './useLogin'
// styles and ui
import styles from './LoginForm.module.css'
import Button from '../UI/Button/Button'
// custom components
import InputControlText from '../Input/InputControlText'

///

const LoginForm = () => {
  const { onInputChange, handleLogin } = useLogin()

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
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
      </fieldset>

      <Button className={`${styles['login-btn']}`} type='submit'>
        Login
      </Button>
    </form>
  )
}

export default LoginForm
