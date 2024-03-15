import  { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';


interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  dob: string;
  phoneNumber: string;
  password: string; 
  // Other properties
}


export default function Admin() {
  const [students, setStudents] = useState<Student[]>([]);
  const [editedStudent, setEditedStudent] = useState<Student | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // Declare here

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [studentToDeleteId, setStudentToDeleteId] = useState<number | null>(null);

   const [formData, setFormData] = useState<Student>({
  id: 0, // Assuming IDs start from 0 or have some default value
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  dob: '',
  phoneNumber: '',
  password: '',
});


const deleteStudent = async (studentId: number) => {
  setStudentToDeleteId(studentId);
  setDeleteConfirmationModal(true);
};

   // fetch data syntax from database
useEffect(() => {
    fetch(`http://localhost:8080/students/list`, { credentials: 'include' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
      
        if (data && Array.isArray(data)) {
         setStudents(data);
        } else {
          console.log('No students received or invalid data format');
        }
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);
  // end of fetch syntax

  // add student syntax
  const addStudent = async (studentData: Student) => {
    try {
      const response = await fetch('http://localhost:8080/students/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error('Failed to add student');
      }

      // Update the list of students after adding a new student
      const newStudent = await response.json();
      setStudents([...students, newStudent]); // Adding the new student to the state
    } catch (error) {
      console.error('Error adding student:', error);
      // Handle error scenarios
    }
  };
  // end of add student syntax

// edit student syntax
  const editStudent = async (studentId: number, updatedData: Student) => {
    try {
      const response = await fetch(`http://localhost:8080/students/edit/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData), // Send updated student data in the request body
      });

      if (!response.ok) {
        throw new Error(`Failed to edit student. Status: ${response.status}`);
      }

      // Handle success - Refresh the students list or perform necessary actions
    } catch (error) {
      console.error('Error editing student:', error);
      // Handle error scenarios
    }
  };


// Function to set the edited student and show the edit modal
const handleEditClick = (student: Student) => {
  setEditedStudent(student);
  setShowEditModal(true);
};



const confirmDeleteStudent = async () => {
  if (studentToDeleteId !== null) {
    try {
      const response = await fetch(`http://localhost:8080/students/delete/${studentToDeleteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete student');
      }

      // Remove the deleted student from the state
      setStudents(prevStudents => prevStudents.filter(student => student.id !== studentToDeleteId));

      // Close the delete confirmation modal after successful deletion
      setDeleteConfirmationModal(false);
    } catch (error) {
      console.error('Error deleting student:', error);
      // Handle error scenarios
    }
  }
};
  // end of delete student sytnax






  return (
     <div className="bg-white">
        <div className='mt-40'>
       
         <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Students List</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all students in Back-End Mastery
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowModal(true)}
          >
            Add user
          </button>
          {/* modal functionality for add user */}
                    {showModal && (
                      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white w-96 p-6 rounded-lg">
                          <h2 className="text-xl font-bold mb-4">Add New Student</h2>
                          <Form
                            onSubmit={(e) => {
                              e.preventDefault();
                              addStudent(formData);
                              setFormData({
                                id: 0,
                                firstName: '',
                                lastName: '',
                                email: '',
                                age: '',
                                dob: '',
                                phoneNumber: '',
                                password: '',
                              });
                              setShowModal(false);
                            }}
                          >
                            {/* Input fields for adding a new student */}
                            <input
                              id='firstName'
                              type="text"
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='lastName'
                              type="text"
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='age'
                              type="number"
                              placeholder="Age"
                              value={formData.age}
                              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='email'
                              type="text"
                              placeholder="Email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='dob'
                              type="date"
                              value={formData.dob}
                              onChange={(e) => {
                                const date = new Date(e.target.value);
                                const formattedDate = date.toISOString().split('T')[0]; // Get YYYY-MM-DD format
                                setFormData({ ...formData, dob: formattedDate });
                              }}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='phoneNumber'
                              type="tel"
                              placeholder="Phone Number"
                              value={formData.phoneNumber}
                              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            <input
                              id='password'
                              type="password"
                              placeholder="Password"
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              className="block w-full border-gray-300 rounded-md p-2 mb-4"
                            />
                            
                            <div className='flex justify-between items-center content-center '>
                                 <button
                              type="submit"
                              className="bg-indigo-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-indigo-500"
                            >
                              Add Student
                            </button>
                                <button
                                  onClick={() => setShowModal(false)}
                                  className=" text-gray-500 hover:text-gray-700 " 
                                >
                                  Close
                                </button>π
                                </div>

                            {/* modal format */}
                          </Form>
                              
                              </div>
                            </div>
                          )}
          {/* end of modal functionality for add user */}

        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                   <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Id No.
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    First Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Age
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date of Birth
                  </th>
                  
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student: Student, index: number) => (
                      <tr key={index}>
                         <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {student.id}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {student.firstName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.lastName}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.age}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.dob}</td>
                       <td className="relative whitespace-nowrap py-4 pr-4 text-right text-sm font-medium sm:pr-0">
                          <button
                           onClick={() => handleEditClick(student)} 
                            type="button"
                            className="text-Indigo-600 hover:text-indigo-900"
                            >
                                Edit
                          </button>
                      </td>
                  
                  {showEditModal && editedStudent && (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white w-96 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edit Student</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // Logic to handle updating the student data using the editStudent function
          editStudent(editedStudent.id, editedStudent);
          setShowEditModal(false);
        }}
      >
        {/* Input fields populated with edited student data */}
        {/* Example: */}
        <input
          type="text"
          value={editedStudent.firstName}
          onChange={(e) => setEditedStudent({ ...editedStudent, firstName: e.target.value })}
          // Other input fields for student data
        />
        {/* Other input fields */}
        <div className="flex justify-between items-center content-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-indigo-500"
          >
            Update
          </button>
          <button
            onClick={() => setShowEditModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  </div>
)}
                     
                     <td className="relative whitespace-nowrap py-4  pr-4 text-right text-sm font-medium sm:pr-0">
                      <button 
                            type='button' 
                            className="text-red-600 hover:text-indigo-900"
                            onClick={() => deleteStudent(student.id)} >
                        Delete
                      </button>
                      {deleteConfirmationModal && (
                        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
                          <div className="bg-white w-96 p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                            <p className="mb-4">Are you sure you want to delete this student?</p>
                            <div className="flex justify-end">
                              <button
                                onClick={() => setDeleteConfirmationModal(false)}
                                className="mr-2 bg-gray-300 text-gray-700 font-semibold rounded-md px-4 py-2 hover:bg-gray-400"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => confirmDeleteStudent()}
                                className="bg-red-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-red-700"
                              >
                                Confirm Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}
