

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        Your App Name
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          Home
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          About
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;