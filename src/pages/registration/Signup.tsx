import React, { FormEvent } from 'react';
import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import { Form, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: string;
  password: string;
  confirmpassword: string;
  dob: string;
}


const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    phoneNumber: '',
    password: '',
    confirmpassword: '',
    dob: '',
  });

 const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error('Password and Confirm Password do not match');
      return;
    }


    // Check if the provided date of birth (dob) is a future date
  const currentDate = new Date();
  const providedDOB = new Date(formData.dob);

  // check if age dili mag start sa 0 or negative
  if (formData.age <= 0) {
    toast.error('Age must be a positive number');
    return;
  }

  // check if dob not future
  if (providedDOB > currentDate) {
    toast.error('Date of birth cannot be a future date');
    return;
  }

// check if password reach 8 char
      if (formData.password.length < 8) {
    toast.error('Password must be at least 8 characters long');
    return;
  }

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

         if (response.ok) {
        toast.success('Registration successful');
        setFormData({
          firstName: '',
          lastName: '',
          age: 0,
          email: '',
          phoneNumber: '',
          password: '',
          confirmpassword: '',
          dob: '',
          
        });
        // Delay navigation by 3 seconds
      setTimeout(() => {
        navigate('/students');
      }, 3000);
      }  else {
      // Check response status and display corresponding error message
      if (response.status === 400 && data.error === 'Invalid email format') {
        toast.error('Invalid email format');
      } else if (response.status === 400 && data.error === 'Email already exists') {
        toast.warning('Email already exists');
        // Registration failed
        toast.error('Registration failed');
      }
    }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Error during registration' );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
      <>
     <div className="bg-white">
     
                 <ToastContainer 
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"

                 /> 

       <div className="flex min-h-full flex-1 flex-col mt-10
       justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign Up
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <Form className="space-y-5 " onSubmit={handleSubmit} method="post">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName" // Ensure the name attribute matches the state property name
                        type="text"
                        autoComplete="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 
                                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                      value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

               <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                      value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                      value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password should atleast 8 - 16 characters'
                      value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            <div>
                <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    placeholder='Confirm password'
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  DOB
                </label>
                <div className="mt-2">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                      value={formData.dob}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


          

              <div>
                <button
                  type="submit"
                  className="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create an account
                </button>
              </div>
            </Form>

            <div>
              <div className="relative mt-5">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">Or </span>
                </div>
              </div>

              <div className="mt-5 flex">
                 <h1>You already have an account?<a href="/signin" className=" text-blue-600 cursor-pointer hover:text-black"> Sign In</a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


      </div>              
</>
  )
}

export default Signup
