import HowitWorks from "../pages/howitworks/HowitWorks";
import Homepage from "../pages/landingpage/Homepage";
import BackendExplained from "../pages/backendexplained/BackendExplained";
import Apply from "../pages/apply/Apply";
import Students from "../pages/students/Students";
import Signin from "../pages/login/SignIn";
import Signup from "../pages/registration/Signup";
import AdminSignin from "../pages/login/AdminSignin";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from "../components/rootlayout/RootLayout";
import AdminRoot from "../pages/admin/AdminRoot";
import AdminPage from "../components/users/admin/Admin"
import AuthinticationRoot from "../pages/login/AuthinticationRoot";
import StudentsRoot from "../components/users/students/StudentsRoot";
import  {  checkAuthLoader } from '../util/Auth';
import Profile from '../pages/students/Profile';
import Courses from "../pages/admin/Courses";
import PrivateRoute from "./PrivateRoutes";
import { Routes,  } from "react-router-dom";

const checkLocalStorageToken = () => {
  const token = localStorage.getItem('token');
  return token ? { token: true } : { token: false };
};

const router = createBrowserRouter([
{
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    loader: checkAuthLoader,
    children: [
        {
            index: true, 
            element: <Homepage />
        },
        {
            path: 'howitworks', 
            element: <HowitWorks />
        },
        {
            path: 'BackendExplained', 
            element: <BackendExplained />
        },
        {
            path: 'apply', 
            element: <Apply />   
        },
        {
            path: 'signin', 
            element: <AuthinticationRoot />,
            children: [
                 {
            index: true, 
            element: <Signin />,
                 },
                 {
             path: 'signup', 
            element: <Signup />,
            children: [
                
            ]
                 },
                  {
             path: 'adminsignin', 
            element: <AdminSignin />
                 },
                
            ],
        },
      
     
    ]

}, 
{

        path: 'students',
        element:
             <StudentsRoot />,
        loader: checkAuthLoader,
        children: [
            {
                index: true,
                element: 
         
 
                <Students />,

              
            },{
                path: 'profile',
                element: <Profile />
            }

        ]
      }, 
      {
        path: 'admin',
        element: <AdminRoot />,
        children: [
            {
                index: true,
                element:    
                <AdminPage />,        
            },{
                path: 'courses',
                element: <Courses />
            },
        ]
        

      },
])


export default router;


