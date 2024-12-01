import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { clearUser } from "../../redux/userSlice";
import { RootState } from "../../redux/store";



const Navbar = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    dispatch(logout())
    dispatch(clearUser())
    navigate("/login")
  }
  console.log(user)
  return (
    
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center">
              <span className="text-2xl font-bold text-pink-500">
                XPert Buddy
              </span>
            </div>
  
            <div className="hidden md:flex space-x-6">
              {user.role =='TUTOR'?
              <Link to={'/tutor'}
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                Home
              </Link>:
              <Link to={'/'}
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                Home
              </Link>}
              <Link 
                to={"/profile"}
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                Profile
              </Link>
              <a
                href="/about"
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                Contact
              </a>
            </div>
  
           
            <div className="hidden md:flex items-center space-x-4 cursor-pointer" onClick={handleLogout}>
              <span
                
                className="px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600 transition-colors"
              >
                Logout
              </span>
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="menu-toggle"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="md:hidden"
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-2 space-y-1">
            <a
              href="/"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/profile"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Profile
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="/login"
              className="block px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600 transition-colors"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;