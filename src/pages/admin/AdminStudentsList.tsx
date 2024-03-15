import { useState} from 'react';
import { Link } from 'react-router-dom';

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

const Admin = () => {
   // Initialize 'students' state as an empty array
  const [students, setStudents] = useState<Student[]>([]);

  // Function to delete a student by ID
  const deleteStudent = (studentId: number) => {
    // Implement deletion logic here using studentId
    // Update 'students' after deletion if needed
  };
  const [showModal, setShowModal] = useState(false);
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
                          <Link
                          to={`students/edit/${student.id}`}
                            type="button"
                            className="text-Indigo-600 hover:text-indigo-900"
                            >
                                Edit
                          </Link>
                      </td>
                  
                     
                     <td className="relative whitespace-nowrap py-4  pr-4 text-right text-sm font-medium sm:pr-0">
                      <button 
                            type='button' 
                            className="text-red-600 hover:text-indigo-900"
                            onClick={() => {
                          // Implement functionality to confirm deletion
                          // Pass the student ID to delete
                          const studentId = student.id;
                         
                        }}>
                        Delete
                      </button>
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

export default Admin;