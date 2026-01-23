import logo from '../assets/images/logo.svg';

const Navbar = () => {
    return (
        // <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        //     <div className="bg-black/40 backdrop-blur-md rounded-full px-8 py-4 flex items-center justify-between">

        //         <div className="flex items-center">
        //             <img src={logo} alt="Sarv Sustain" className="h-12 w-auto" />
        //         </div>

        //         <div className="flex items-center gap-8">
        //             <a
        //                 href="#about"
        //                 className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
        //             >
        //                 About Us
        //             </a>
        //             <a
        //                 href="#solutions"
        //                 className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
        //             >
        //                 Solutions
        //             </a>
        //             <a
        //                 href="#mission"
        //                 className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
        //             >
        //                 Mission & Vision
        //             </a>
        //             <a
        //                 href="#contact"
        //                 className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
        //             >
        //                 Talk to Us
        //             </a>
        //         </div>
        //     </div>
        // </nav>

         <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      {/* Navbar content */}
      <div className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
           <img src={logo} alt="Sarv Sustain" className="h-20 w-auto" />
          </div>

          {/* Centered Navigation Items */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center gap-8 bg-[#848484]/70 backdrop-blur-md rounded-full px-10 py-3 flex items-center justify-between border border-white">
              <li>
                <a href="#about" className="text-white hover:text-teal-300 transition-colors font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white hover:text-teal-300 transition-colors font-medium">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#mission" className="text-white hover:text-teal-300 transition-colors font-medium">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-teal-300 transition-colors font-medium">
                  Talk to Us
                </a>
              </li>
            </ul>
          </div>

          {/* Spacer for layout balance */}
          <div className="w-48"></div>
        </div>
      </div>
    </nav>

    );
};

export default Navbar;
