import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Verify = () => {
  const { id_av, hash } = useParams();
  const [verificationStatus, setVerificationStatus] = useState("Verifying...");
  const [verificationError, setVerificationError] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User type");
    navigate("/login");
  };

  useEffect(() => {
    const verifyAccount = async () => {


      
      try {
        const token = localStorage.getItem("token");
        const userType = localStorage.getItem("User type");
        if (!token) {
          navigate("/login");
          return;
        } else if (userType !== "admin") {
          logout();
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/email/verify/${id_av}/${hash}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVerificationStatus("Account Verified!");
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          setVerificationError(error.response.data.error);
        } else if (error.response && error.response.data) {
          setVerificationError(error.response.data);
        } else {
          setVerificationError("Verification Failed");
        }
      }
    };

    verifyAccount();
  }, [id_av, hash, navigate, logout]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Verification Status</h3>
              {verificationError ? (
                <p className="card-text text-danger">{verificationError}</p>
              ) : (
                <p className="card-text">{verificationStatus}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
