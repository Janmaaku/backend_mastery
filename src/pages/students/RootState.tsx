
import { combineReducers } from '@reduxjs/toolkit';
import coursesReducer from '../../store/Course-Slice';
// import other reducers if any

const rootReducer = combineReducers({
  courses: coursesReducer,
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;