import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { Animated } from 'react-native';
import delay = Animated.delay;

export const fetchMessage = createAsyncThunk(
  'helloWorld/fetchMessage',
  async ({ time, message }: { time: number; message: string }, thunkAPI) => {
    // Thunk Api gives access to dispatch, getState and other functions
    await delay(time);
    return { message: message + ' ' + thunkAPI.requestId };
  },
);

type HelloWorldSlice = {
  message: string;
  loading: boolean;
  loaded: boolean;
};

const initialState: HelloWorldSlice = {
  loading: false,
  loaded: false,
  message: 'Hello',
};

export const helloWorldSlice = createSlice({
  name: 'helloWorld',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.loading = false;
      state.loaded = true;
    });
    builder.addCase(fetchMessage.pending, state => {
      state.loading = true;
      state.loaded = false;
    });
  },
});

export const { setMessage } = helloWorldSlice.actions;

// The function below is called a selector and allows us to select a value from
// the stateSelectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter./// value)`
export const selectHelloWorldState = (state: RootState): HelloWorldSlice =>
  state.helloWorld;
export const selectMessage = (state: RootState) =>
  selectHelloWorldState(state).message;

export default helloWorldSlice.reducer;
