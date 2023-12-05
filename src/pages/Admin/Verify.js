import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';

const Verify = () => {
  const { id_av, hash } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');
  // const history = useHistory();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          Navigate('/login')
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8000/email/verify/${id_av}/${hash}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setVerificationStatus('Account Verified!');
      } catch (error) {
        setVerificationStatus('Verification Failed');
      }
    };

    verifyAccount();
  }, [id_av, hash]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Verification Status</h3>
              <p className="card-text">{verificationStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
