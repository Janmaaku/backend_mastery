import { Outlet } from "react-router-dom"

import StudentsNavigation from '../students/StudentsNavigation'

const StudentsRoot = () => {
  return (
    <>
      <StudentsNavigation />
      <Outlet />
    </>
  )
}

export default StudentsRoot
