import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import LandingPageAdmin from "./pages/Admin/LandingPage";
import LandingPageAvo from "./pages/Avo/LandingPage";
import LandingPageUser from "./pages/User/LandingPage";
import SignUp from "./pages/SignUp";
import "./App.css";
import "./style/style.css"
import Verify from "./pages/Admin/Verify";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/admin_landing_page" element={<LandingPageAdmin />} />
          <Route path="/avo_landing_page" element={<LandingPageAvo />} />
          <Route path="/user_landing_page" element={<LandingPageUser />} />
          <Route path="/verify" element={<Verify />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
