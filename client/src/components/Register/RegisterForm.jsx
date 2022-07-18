// IMPORT

// useRegister hook
import useRegister from './useRegister';
// styles and ui
import styles from './RegisterForm.module.scss';
// custom components
import InputControlText from '../Input/InputControlText';

///

const RegisterForm = () => {
  const { onInputChange, handleRegister } = useRegister();

  return (
    <form onSubmit={handleRegister} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
        <InputControlText
          onChange={onInputChange}
          type='text'
          for='name'
          placeholder='Enter name'
          label='Name'
          className={`${styles['name-field']}`}
        />
        <InputControlText
          onChange={onInputChange}
          type='email'
          for='email'
          placeholder='Enter email'
          label='Email'
          className={`${styles['email-field']}`}
        />
        <InputControlText
          onChange={onInputChange}
          type='password'
          for='password'
          placeholder='Enter password'
          label='Password'
          className={`${styles['pass-field']}`}
        />
        <InputControlText
          onChange={onInputChange}
          type='password'
          for='passwordConfirm'
          placeholder='Confirm Password'
          label='Confirm Password'
          className={`${styles['pass2-field']}`}
        />
      </fieldset>

      <button className={`${styles['create-user-btn']}`} type='submit'>
        Create User
      </button>
    </form>
  );
};

export default RegisterForm;
