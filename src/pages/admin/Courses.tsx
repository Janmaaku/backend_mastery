import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const Courses: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');


  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
      // Handle successful response (e.g., display success message)
    } catch (error) {
      console.error('Error uploading:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className='mt-36 mx-auto max-w-md border rounded-md p-5 shadow-xl flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-5'>Upload Course Details</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        {/* Your form fields */}
        <div className='flex flex-col'>
          <label htmlFor="title" className='mb-1 font-semibold'>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border rounded-md p-2'
          />
        </div>
        {/* Other form fields */}
        <div className='flex flex-col'>
          <label htmlFor="image" className='mb-1 font-semibold'>Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            className='border rounded-md p-2'
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className='bg-blue-500 text-white font-semibold rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Courses;