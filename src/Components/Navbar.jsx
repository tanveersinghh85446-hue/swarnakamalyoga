import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 ${
      isActive
        ? "text-amber-400 font-semibold"
        : "text-white hover:text-amber-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-black-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <Link to="/" className="flex items-center gap-2">
            {/* <img
              src="/Start.AVIF"
              alt="logo"
              className="w-9 h-9 rounded-full object-cover"
            /> */}
            <img
  src="/Start.AVIF"
  alt="logo"
  className="w-12 h-12 rounded-full object-cover"
/>
          </Link>
          <span className="text-white font-semibold text-lg tracking-wide mt-1">
            Swarna Kamal Yoga
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLink}>
            Home
          </NavLink>
          {/* <NavLink to="/about" className={navLink}>About</NavLink> */}
          <NavLink to="/team" className={navLink}>
            Team
          </NavLink>
          <NavLink to="/gallery" className={navLink}>
            Gallery
          </NavLink>
          <NavLink to="/blog" className={navLink}>
            Blog
          </NavLink>
          <NavLink to="/courses" className={navLink}>
            Courses
          </NavLink>
          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>
          <NavLink to="/about" className={navLink}>
            About
          </NavLink>
          <NavLink to="/feedback" className={navLink}>
            Feedback
          </NavLink>

          <NavLink
            to="/apply"
            className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
          >
            Apply Now
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl z-60"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Dark Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-black/95 backdrop-blur-xl border-r border-white/10
          transform transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Side Panel Header */}
        <div className="h-16 flex items-center px-5 border-b border-white/10">
          <span className="text-white font-semibold text-base tracking-wide">
            Menu
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Team
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Feedback
          </NavLink>

          {/* CTA Button */}
          <div className="mt-4 px-4">
            <NavLink
              to="/apply"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-amber-500 text-white px-6 py-2.5 rounded-full font-semibold shadow hover:bg-amber-600 transition duration-300"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
