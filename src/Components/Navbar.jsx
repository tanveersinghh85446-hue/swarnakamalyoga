import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-black border-amber-500/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 group shrink-0"
              onClick={handleLinkClick}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-lg transition-all duration-300"></div>
                <img
                  src="/Start.AVIF"
                  alt="Swarna Kamal Yoga"
                  className="w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 rounded-full object-cover relative border-2 transition-all duration-300"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-white font-bold text-sm sm:text-lg md:text-xl tracking-wide">
                  Swarna Kamal Yoga
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                Team
              </NavLink>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                Gallery
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                Courses
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition duration-300 font-medium text-sm ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
              >
                Feedback
              </NavLink>

              <div className="ml-4 pl-4 border-l border-amber-500/20">
                <NavLink
                  to="/apply"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 sm:px-6 py-2 rounded-lg font-semibold text-sm transition duration-300 shadow-lg hover:shadow-amber-500/50 hover:scale-105 transform"
                >
                  Apply Now
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 hover:bg-amber-500/10 rounded-lg transition duration-300"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-amber-500 transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-amber-500 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-amber-500 transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown Style */}
        {menuOpen && (
          <div className="lg:hidden border-t border-amber-500/20 bg-black/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                About
              </NavLink>

              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                Team
              </NavLink>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                Gallery
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                Blog
              </NavLink>

              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                Courses
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>

              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition duration-300 font-medium text-sm sm:text-base ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`
                }
                onClick={handleLinkClick}
              >
                Feedback
              </NavLink>

              <div className="mt-4 pt-4 border-t border-amber-500/20">
                <NavLink
                  to="/apply"
                  className="block text-center bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition duration-300 shadow-lg active:scale-95"
                  onClick={handleLinkClick}
                >
                  Apply Now
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;