import { useNavigate } from "react-router-dom";
import {Signup as SignupComponent} from "../../components/common/Signup"
import toast, { Toaster } from "react-hot-toast";
import { authService } from "../../services/authService";
type LoginFormInputs = {
    name:string;
    email: string;
    password: string;
  };

const Signup = () => {
    const navigate = useNavigate()
    const handleSignup = async (data:LoginFormInputs)=>{
        try {
            const user = await toast.promise(
                authService.signUp(data.name, data.email, data.password, "STUDENT"),
                {
                    loading: 'Signing up...',
                    success: <b>signup successful!</b>,
                    error: <b>User already exists.</b>,
                }
            )
            if(user.success){
                navigate("/")
                localStorage.setItem("token", user.data.token)
            }
        } catch (error) {
            console.log(error)
            // toast.error("user already exists")
        }
    }
  return (
    <>
      <div><Toaster /></div>

    <SignupComponent user="Student" handleSignup={handleSignup}/>
    </>
  )
}

export default Signup