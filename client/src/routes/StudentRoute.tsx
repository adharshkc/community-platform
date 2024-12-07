import { Route, Routes } from "react-router-dom"
import Login from "../pages/student/Login"
import Signup from "../pages/student/Signup"
import StudentProtectedRoute from "./StudentProtectedRoute"
import Dashboard from "../pages/student/Dashboard"
import Profile from "../pages/student/Profile"
import StudentLayout from "../layouts/StudentLayout"


const StudentRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route element={<StudentProtectedRoute />}> */}
      <Route element={<StudentLayout/>}>
        <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      {/* </Route> */}
    </Routes>
  )
}

export default StudentRoute