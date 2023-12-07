import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import LandingPageAdmin from "./pages/Admin/LandingPage";
import LandingPageAvo from "./pages/Avo/LandingPage";
import LandingPageUser from "./pages/User/LandingPage";
import SignUp from "./pages/SignUp";
import "./App.css";
import "./style/style.css";
import Verify from "./pages/Admin/Verify";
import Navbar from "./pages/Components/Navbar";
import Jurdique from "./pages/Jurdique";
import AvoList from "./pages/Components/AvoList";
import Profile from "./pages/Profile";

function App() {
  const userType = localStorage.getItem("User type");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
   }, []);

  const handleSignOut = (callback) => {
    localStorage.removeItem("token");
    localStorage.removeItem("User type");
    setIsLoggedIn(false);
    if (callback) callback();
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/avo_table" element={userType === "admin" ? <LandingPageAdmin /> : <Navigate to="/login" />} />
          {/* <Route path="/admin_landing_page" element={<LandingPageAdmin />} /> */}
          <Route path="/avo_landing_page" element={<LandingPageAvo />} />
          <Route path="/user_landing_page" element={<LandingPageUser />} />
          <Route path="/verify/:id_av/:hash" element={<Verify />} />
          <Route path="/juridique" element={<Jurdique />} />
          <Route path="/avocats" element={<AvoList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
