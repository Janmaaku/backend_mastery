import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DiscoverModel } from '../model/DiscoverModel';

interface CoursesState {
  courses: DiscoverModel[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<DiscoverModel[]>) {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;