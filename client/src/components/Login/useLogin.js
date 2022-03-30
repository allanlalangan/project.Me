// IMPORT
// hooks
import { useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { login } from '../../features/authSlice'

///

const useLogin = () => {
  const dispatch = useDispatch()

  const inputValues_init = {
    email: '',
    password: '',
  }
  const [inputValues, setInputValues] = useState(inputValues_init)

  const onInputChange = (e) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(inputValues))
  }

  return { onInputChange, handleLogin }
}

export default useLogin
