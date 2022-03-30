// IMPORT

// hooks
import { useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { register } from '../../features/authSlice'

///

const useRegister = () => {
  const dispatch = useDispatch()

  const inputValues_init = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const [inputValues, setInputValues] = useState(inputValues_init)

  const { name, email, password, passwordConfirm } = inputValues

  const onInputChange = (e) => {
    const { name, value } = e.target

    setInputValues((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      console.log('Passwords do not match')
    } else {
      const formData = {
        name,
        email,
        password,
      }
      dispatch(register(formData))
    }
  }

  return { onInputChange, handleRegister }
}

export default useRegister
