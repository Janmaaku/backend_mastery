import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import imageUploadReducer from './ImageUploadSlice';

// Define your RootState type to represent the entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// Define AppThunk type alias
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // extra argument
  Action<string> // type of action (optional)
>;

// Create your Redux store
export const store = configureStore({
  reducer: {
    imageUpload: imageUploadReducer,
    // ... other reducers
  },
  // ... other store configurations
});