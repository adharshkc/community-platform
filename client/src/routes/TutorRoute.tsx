import { Route, Routes } from "react-router-dom"
import Signup from "../pages/tutor/Signup"
import TutorProtectedRoute from "./TutorProtectedRoute"
import Dashboard from "../pages/tutor/Dashboard"



const TutorRoute = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route element={<TutorProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default TutorRoute