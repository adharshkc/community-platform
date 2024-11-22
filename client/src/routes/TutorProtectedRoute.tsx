import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    redirectPath?: string;
  }

const TutorProtectedRoute:React.FC<ProtectedRouteProps> = ({redirectPath='/login'}) => {
    const isAuthenticated = useSelector((state:RootState)=>state.auth.isAuthenticated)
    const token = localStorage.getItem('token')
    
    if(!isAuthenticated && token=='tutor_jwt_token'){
        return <Navigate to={redirectPath} replace/>
    }
  return <Outlet/>
}

export default TutorProtectedRoute