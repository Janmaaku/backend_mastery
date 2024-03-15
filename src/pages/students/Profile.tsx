import React, { useState, useEffect } from "react";
import { getTokenFromLocalStorage } from "./Helpers"; // Import your token retrieval function

// Define the structure of a Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  // Add other properties based on your student data model
}



interface Props {}

const StudentsPage: React.FC<Props> = () => {
  const [studentData, setStudentData] = useState<Student | null>(null); // State to store student data
  const [hasToken, setHasToken] = useState<boolean>(false); // State to track token existence
  const [error, setError] = useState<string>(""); // State to handle errors

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) {
      setHasToken(true);
      verifyStudentToken(token);
    }
  }, []);

  const verifyStudentToken = async (token: string) => {
    try {
      const response = await fetch("http://localhost:8080/check-token", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        const studentInfo = await response.json();
        setStudentData(studentInfo);
      } else {
        setError("User is not a student or token is invalid");
      }
    } catch (error) {
      console.error("Error", error);
      setError("Failed to verify token");
    }
  };

  return (
    <div className="mt-32 flex justify-center">
        {hasToken ? (
        <div className="flex justify-center items-center bg-blue-500 p-8 w-96 content-center">
          {studentData ? (
            <div className="text-white">
              <h2 className="text-4xl font-bold">Welcome, {studentData.firstName}!</h2>
              <p>Email: {studentData.email}</p>
              {/* Other details based on your student model */}
              <p className="mt-10">Status:<strong>Feeling Inspired</strong></p>
            </div>
          ) : (
            <p>{error || 'Loading...'}</p>
          )}
        </div>
      ) : (
        <p>Please login to access student data.</p>
      )}
      {/* Other components or content for the students' page */}
    </div>
  );
};

export default StudentsPage;



    //   {hasToken ? (
    //     <div>
    //       {studentData ? (
    //         <div>
    //           <h2>Welcome, {studentData.firstName}!</h2>
    //           <p>Email: {studentData.email}</p>
    //           <p>Age: {studentData.age}</p>
    //           {/* Other details based on your student model */}
    //         </div>
    //       ) : (
    //         <p>{error || 'Loading...'}</p>
    //       )}
    //     </div>
    //   ) : (
    //     <p>Please login to access student data.</p>
    //   )}