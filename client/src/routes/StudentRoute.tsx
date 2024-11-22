import { Route, Routes } from "react-router-dom"
import Login from "../pages/student/Login"


const StudentRoute = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default StudentRoute