import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, User, LogIn } from "lucide-react";
import logo from "../../public/BLOODLINK.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Find Donors", path: "/donors" },
  { name: "Request Blood", path: "/request-blood" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="BloodLink Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-900">
              Blood<span className="text-red-500">Link</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-red-600 bg-red-100 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
                <LogIn className="h-4 w-4" /> Login
              </button>
            </Link>

            <Link to="/register">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-red-500 to-orange-400 hover:opacity-90 transition-all shadow-md">
                <User className="h-4 w-4" /> Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            {isOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-slideDown">
            <div className="flex flex-col gap-2 mt-4">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-red-100 text-red-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Auth Buttons */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
                    <LogIn className="h-4 w-4" /> Login
                  </button>
                </Link>

                <Link to="/register" className="flex-1" onClick={() => setIsOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white bg-gradient-to-r from-red-500 to-orange-400 hover:opacity-90 transition-all shadow-md">
                    <User className="h-4 w-4" /> Register
                  </button>
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
