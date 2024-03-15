import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UploadData {
  formData: FormData;
}

interface UploadResponse {
  message: string;
}


// Action creator using createAsyncThunk
export const uploadImage = createAsyncThunk(
  'imageUpload/uploadImage',
  async ({ formData }: UploadData) => {
    try {
      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error uploading the file');
    }
  }
);

// Redux slice
const imageUploadSlice = createSlice({
  name: 'imageUpload',
  initialState: {
    message: '',
  },
  reducers: {
    setImageUploadMessage(state, action) {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
  },
});

export const { setImageUploadMessage } = imageUploadSlice.actions;
export default imageUploadSlice.reducer;