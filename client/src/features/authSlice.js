import { createSlice } from '@reduxjs/toolkit'

//Get user from localStorage if it exists

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer
