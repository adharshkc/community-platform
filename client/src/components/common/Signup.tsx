import { useForm } from "react-hook-form"
import { Link, useLocation } from "react-router-dom"

type LoginFormInputs = {
    name: string;
    email: string;
    password: string;
};

type SignupProps = {
    user: string,
    handleSignup:(data:LoginFormInputs)=>void
}

export const Signup: React.FC<SignupProps> = ({ user, handleSignup }) => {
    const location = useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>()
    const onSubmit = (data: LoginFormInputs) => {
        handleSignup(data)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6"> {user} Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 6 characters long",
                                },
                            })}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            type="email"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
                            placeholder="Your email"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long",
                                    },
                                })}
                                type="password"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
                                placeholder="Your password"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center text-sm text-gray-600">
                        </label>
                        <a
                            href="#"
                            className="text-sm text-pink-500 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600"
                    >
                        Log in
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link to={"/login"} className="text-sm text-pink-500 hover:underline">
                        Already have an account?
                    </Link>{" "}
                    or{" "}
                    {
                        location.pathname=="/tutor/signup"?

                        <Link to={"/signup"} className="text-sm text-pink-500 hover:underline">
                        Sign up as a student
                    </Link>:
                    <Link to={"/tutor/signup"} className="text-sm text-pink-500 hover:underline">
                        Sign up as a tutor
                    </Link>
                    }
                </div>
            </div>
        </div>
    )
}
