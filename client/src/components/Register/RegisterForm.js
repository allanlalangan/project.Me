import React from 'react'
import styles from './RegisterForm.module.css'

import Button from '../UI/Button'

const RegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleRegister} className={styles.form}>
      <fieldset className={styles['form-fieldset']}>
        <label className={styles.label} htmlFor='username'>
          Username
        </label>
        <input
          className={`${styles['form-control']} ${styles['username-field']}`}
          type='username'
          id='username'
          name='username'
          placeholder={'Enter username'}
        />
        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <input
          className={`${styles['form-control']} ${styles['email-field']}`}
          type='email'
          id='email'
          name='email'
          placeholder={'Enter email'}
        />
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input
          className={`${styles['form-control']} ${styles['pass-field']}`}
          type='text'
          id='password'
          placeholder={'Enter password'}
        />
        <label className={styles.label} htmlFor='password2'>
          Password2
        </label>
        <input
          className={`${styles['form-control']} ${styles['pass2-field']}`}
          type='text'
          id='password2'
          placeholder={'Confirm password'}
        />
      </fieldset>

      <Button type='submit'>Create User</Button>
    </form>
  )
}

export default RegisterForm
