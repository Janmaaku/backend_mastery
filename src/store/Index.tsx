import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './Course-Slice';
import ImageUploadReducer from './ImageUploadSlice';



const store = configureStore({
  reducer: {
    courses: coursesReducer,
    // Add other reducers if needed
    imageUpload: ImageUploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;