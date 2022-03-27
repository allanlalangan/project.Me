import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Get user from localStorage if it exists
const existingUser = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: existingUser ? existingUser : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/api/users', userData)
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/api/users/login', userData)
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const logout = createAsyncThunk('auth/logout', async (thunkAPI) => {
  try {
    await localStorage.removeItem('user')
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset(state) {
      state.user = null
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.user = null
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export default authSlice.reducer
export const { reset } = authSlice.actions
export { register, login, logout }
