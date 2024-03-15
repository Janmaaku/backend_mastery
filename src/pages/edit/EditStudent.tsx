import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';

interface Student {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  dob: string;
  phoneNumber: string;
}

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState<Student>({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    dob: '',
    phoneNumber: '',
  });

  useEffect(() => {
    // Fetch the student's data based on the ID from the backend
    // Implement the API call to retrieve student details
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/students/${id}`);
        setStudent(response.data); // Assuming response.data contains student details
      } catch (error) {
        console.error('Error fetching student details:', error);
        // Handle error appropriately (e.g., show an error message)
      }
    };

    fetchStudentDetails(); // Call the function when the component mounts
  }, [id]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/students/edit/${id}`, student);
      console.log(response.data);
      navigate('..');
    } catch (error) {
      console.log(error);
      // Handle error appropriately (e.g., show an error message)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setStudent({ ...student, [id]: value });
  };

  
  return (

                <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white w-96 p-6 rounded-lg">
                          <h2 className="text-xl font-bold mb-4">Edit Student</h2>
                          <Form
                          method="POST"
                            onSubmit={handleSubmit}
                            
                          >
                            {/* Input fields for adding a new student */}
                            <input
                              id='firstName'
                              type="text"
                              placeholder="First Name"
                             value={student.firstName}
                              onChange={handleChange}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='lastName'
                              type="text"
                              value={student.lastName}
                              onChange={handleChange}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='age'
                              type="number"
                              value={student.age}
                              onChange={handleChange}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='email'
                              type="email"
                             value={student.email}
                              onChange={handleChange}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='dob'
                              type="date"
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='phoneNumber'
                              type="tel"
                              placeholder="Phone Number"
                              value={student.phoneNumber}
                              onChange={handleChange}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                        
                      <div className='flex justify-between items-center content-center '>
                                 <button
                              type="submit"
                              className="bg-indigo-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-indigo-500"
                            >
                              Update
                            </button>
                                <Link
                                 to=".."
                                  className=" text-gray-500 hover:text-gray-700 " 
                                >
                                  Close
                                </Link>
                                </div>
                          </Form>
                              
                              </div>
                            </div>
  )
}

export default EditStudent
