import { Outlet } from "react-router-dom";

import AdminNavigation from '../../components/adminnavigation/AdminNavigation';

const AdminRoot = () => {
  return (
    <>
        <AdminNavigation />
        <Outlet /> 
    </>
  )
}

export default AdminRoot
