import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

const addGoal = createAsyncThunk(
  'goals/addGoal',
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios.post('/api/goals', formData, config)
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
  }
)

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addGoal.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(addGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
      })
      .addCase(addGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export default goalsSlice.reducer
export const { reset } = goalsSlice.actions
export { addGoal }
