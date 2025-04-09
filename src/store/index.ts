
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import participantsReducer from './slices/participantsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    participants: participantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
