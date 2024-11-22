import toast, { Toaster } from "react-hot-toast"
import { Signup as SignupComponent } from "../../components/common/Signup"
import { authService } from "../../services/authService"
import { useNavigate } from "react-router-dom"

type LoginFormInputs = {
    name:string;
    email: string;
    password: string;
  };


const Signup = () => {
    const navigate = useNavigate()
    const handleSignup = async (data:LoginFormInputs) => {
        try {
            const user = await toast.promise(
                authService.signUp(data.name, data.email, data.password, "TUTOR"),
                {
                    loading: 'Signing up...',
                    success: <b>Signup successful!</b>,
                    error: <b>User already exists.</b>,
                }
            )
            if (user.success) {
                navigate("/login")
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
            <SignupComponent user="Tutor" handleSignup={handleSignup} />
        </>
    )
}

export default Signup