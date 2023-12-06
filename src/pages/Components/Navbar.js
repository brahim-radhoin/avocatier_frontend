import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup"; 
  
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <h1>AVOCATIER</h1>
        </Link> 

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="nav-link px-2 link-dark">
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="nav-link px-2 link-dark">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="nav-link px-2 link-dark">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2 link-dark">
              About
            </Link>
          </li>
        </ul>
        {(!isLoggedIn && (!isLoginPage && !isSignupPage)) && (
          <>
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign-up
            </Link>
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
