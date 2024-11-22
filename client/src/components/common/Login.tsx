

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Log in</h2>
        {/* <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Continue with Facebook
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5 mr-2"
            />
            Continue with Apple
          </button>
        </div> */}
        {/* <div className="flex items-center justify-center my-6">
          <span className="w-1/3 border-t border-gray-300"></span>
          <span className="px-2 text-sm text-gray-500">or</span>
          <span className="w-1/3 border-t border-gray-300"></span>
        </div> */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="Your password"
              />
              {/* <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-700"
              >
                👁️
              </button> */}
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              {/* <input type="checkbox" className="mr-2 text-pink-500 focus:ring-pink-300" /> */}
              {/* Remember me */}
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
          <a href="#" className="text-sm text-pink-500 hover:underline">
            Sign up as a student
          </a>{" "}
          or{" "}
          <a href="#" className="text-sm text-pink-500 hover:underline">
            Sign up as a tutor
          </a>
        </div>
      </div>
    </div>
  );
};


