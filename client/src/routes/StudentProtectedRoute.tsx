import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    redirectPath?: string;
  }

const StudentProtectedRoute:React.FC<ProtectedRouteProps> = ({redirectPath='/login'}) => {
    const isAuthenticated = useSelector((state:RootState)=>state.auth.isAuthenticated)
    const token = localStorage.getItem('token')
    if(isAuthenticated && token=='student_jwt_token'){
      console.log(token)
      return <Outlet/>
    }
    return <Navigate to={redirectPath} replace/>
}

export default StudentProtectedRoute