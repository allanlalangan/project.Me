import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Get user from localStorage if it exists
const existingUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: existingUser ? existingUser : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://projectme-srv.herokuapp.com/api/users',
        formData
      );
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
    const response = await axios.post(
      'https://projectme-srv.herokuapp.com/api/users/login',
      formData
    );
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.toString());
  }
});

const logout = createAsyncThunk('auth/logout', async (thunkAPI) => {
  try {
    await localStorage.removeItem('user');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.toString());
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset(state) {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.message = 'Registering User';
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.message =
          'Successfully registered new user. A verification email has been sent. Please verify your account.';
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.message = 'Logging in...';
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.message = '';
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.message = 'User successfully logged out';
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
export { register, login, logout };
