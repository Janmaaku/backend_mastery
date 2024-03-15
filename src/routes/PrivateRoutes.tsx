import { Navigate, Outlet } from 'react-router-dom';

interface AuthObject {
  token: boolean;
  // Other properties if necessary
}

const PrivateRoute = ({ auth }: { auth: AuthObject }) => {
  const token = localStorage.getItem('token');

  // Check if token exists in localStorage or if the auth object contains a token
  const isAuthenticated = token || auth.token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;