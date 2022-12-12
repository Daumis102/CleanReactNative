import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootSaga from '@redux/sagas/rootSaga';
import { helloWorldSlice } from '@redux/slices/HelloWorldSlice';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = {
  helloWorld: helloWorldSlice.reducer,
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;
