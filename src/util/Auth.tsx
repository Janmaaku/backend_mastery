import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}





export function checkAuthLoader() {
  const token = getAuthToken();
  return token;
}

export function useAuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = checkAuthLoader();
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);

  return null; // If you don't need to render anything for the redirect logic
}