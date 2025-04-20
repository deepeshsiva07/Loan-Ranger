import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, User, X, LogOut } from 'lucide-react';
import logo from "../assets/Logo.png"

function Header({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    closeMenu();
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LoanRanger</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-6">
              <NavLink to="/" className={isActive('/')}>Home</NavLink>
              <NavLink to="/about" className={isActive('/about')}>About</NavLink>
              <NavLink to="/services" className={isActive('/services')}>Services</NavLink>
              <NavLink to="/contact" className={isActive('/contact')}>Contact</NavLink>
              <NavLink to="/dashboard" className={isActive('/dashboard')}>Dashboard</NavLink>
              {isLoggedIn && <NavLink to="/get-started" className={isActive('/get-started')}>Get Started</NavLink>}
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center">
                <Link to="/dashboard" className="flex items-center text-sm px-4 py-2 rounded-md text-primary-600 hover:bg-primary-50">
                  <User className="h-4 w-4 mr-1" />
                  <span>My Account</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-4 flex items-center text-sm px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="flex items-center text-sm px-4 py-2 rounded-md text-primary-600 hover:bg-primary-50">
                  <User className="h-4 w-4 mr-1" />
                  <span>Log In</span>
                </Link>
                <Link to="/register" className="ml-4 btn btn-primary text-sm">Sign up</Link>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button className="text-gray-700" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <NavLink to="/" className="block px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" className="block px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/dashboard" className="block px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>Dashboard</NavLink>
            {isLoggedIn && <NavLink to="/get-started" className="block px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>Get Started</NavLink>}
            <div className="pt-4 pb-3 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  <NavLink to="/dashboard" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>
                    <User className="h-4 w-4 mr-1" />
                    <span>My Account</span>
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    <span>Log Out</span>
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-50" onClick={closeMenu}>
                    <User className="h-4 w-4 mr-1" />
                    <span>Log In</span>
                  </NavLink>
                  <NavLink to="/register" className="block mt-2 px-3 py-2 rounded-md bg-primary-600 text-white" onClick={closeMenu}>Get Started</NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
