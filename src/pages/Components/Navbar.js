import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleSignOut }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");

  const handleLogout = () => {
    handleSignOut(() => navigate("/login"));
  };

  const handleUserLogin = (user) => {
    setUserType(user.type);
  };

  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <h1>AVOCATIER</h1>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {/* <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li> */}
          <li>
            <Link to={userType === "admin" ? "/avo_table" : "/avocats"} className="nav-link px-2 link-dark">
              Avocats
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link px-2 link-dark">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/juridique" className="nav-link px-2 link-dark">
              Juridique
            </Link>
          </li>

        </ul>
        {!(isLoggedIn || isLoginPage || isSignupPage) && (
          <div>
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign-up
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <button onClick={handleLogout} className="btn btn-outline-primary me-2">
            Sign Out
          </button>
        )}
      </header>
    </div>
  );
};

export default Navbar;
