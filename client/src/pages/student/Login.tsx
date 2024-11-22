import toast, { Toaster } from "react-hot-toast";
import { Login as LoginComponent } from "../../components/common/Login"
import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { setUser } from "../../redux/userSlice";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = async (data: LoginFormInputs) => {
    try {
      console.log(data)
      const user = await toast.promise(
        authService.login(data.email, data.password),
        {
          loading: 'Logging in...',
          success: <b>Login successful!</b>,
          error: <b>Invalid credentials.</b>,
        }
      );
      console.log(user);
      localStorage.setItem('token', user.data.token)
      const userStore = {
        id: user.data.id,
        name: user.data.name,
        email: user.data.email,
        role: user.data.role,
      }
      dispatch(setUser(userStore))
      dispatch(login())
      if (user.data.role === "STUDENT") {
        navigate('/')
      }
      if (user.data.role === 'TUTOR') {
        navigate('/tutor')
      }
      if (user.data.role === 'ADMIN') {
        navigate('/admin')
      }
    } catch (error) {
      console.log(error)

    }
  }
  return (
    <>
      <div><Toaster /></div>
      <LoginComponent handleLogin={handleLogin} />
    </>
  )
}

export default Login


