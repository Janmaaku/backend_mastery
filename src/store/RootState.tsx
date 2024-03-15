
import { combineReducers, createStore } from 'redux';
import imageUploadReducer from './ImageUploadSlice'; // Assuming you have a file with this reducer

const rootReducer = combineReducers({
  imageUpload: imageUploadReducer,
  // ...other reducers if any
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;