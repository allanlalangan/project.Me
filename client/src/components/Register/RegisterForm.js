// IMPORT
// useRegister hook
import useRegister from './useRegister'
// styles and ui
import styles from './RegisterForm.module.css'
import Button from '../UI/Button/Button'
// custom components
import Input from '../Input/Input'

///

const RegisterForm = () => {
  const { onInputChange, handleRegister } = useRegister()

  return (
    <form onSubmit={handleRegister} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
        <Input
          onChange={onInputChange}
          type='text'
          for='name'
          placeholder='Enter name'
          label='Name'
          className={`${styles['name-field']}`}
        />
        <Input
          onChange={onInputChange}
          type='email'
          for='email'
          placeholder='Enter email'
          label='Email'
          className={`${styles['email-field']}`}
        />
        <Input
          onChange={onInputChange}
          type='password'
          for='password'
          placeholder='Enter password'
          label='Password'
          className={`${styles['pass-field']}`}
        />
        <Input
          onChange={onInputChange}
          type='password'
          for='passwordConfirm'
          placeholder='Confirm Password'
          label='Confirm Password'
          className={`${styles['pass2-field']}`}
        />
      </fieldset>

      <Button className={`${styles['create-user-btn']}`} type='submit'>
        Create User
      </Button>
    </form>
  )
}

export default RegisterForm
