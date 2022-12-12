import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';

type HelloWorldSlice = {
  message: string;
};

const initialState = {
  message: '',
} as HelloWorldSlice;

export const helloWorldSlice = createSlice({
  name: 'helloWorld',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
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
