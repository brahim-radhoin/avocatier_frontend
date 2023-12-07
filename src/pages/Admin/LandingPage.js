import React, { useEffect, useState } from "react";
import "../../style/avoListStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sha1 from "js-sha1";
import axios from 'axios';

import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBBadge } from "mdb-react-ui-kit";

const AvoTable = () => {
  const [avos, setAvos] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/avos")
      .then((response) => {
        setAvos(response.data);
      })
      .catch((error) => console.error("There has been a problem with your fetch operation: ", error));
  }, []);

  // const activateAvo = (id_av) => {
  //   fetch(`http://127.0.0.1:8000/api/email/verify/${id_av}/hash`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAvos(avos.map((avo) => (avo.id_av === id_av ? data : avo)));
  //     });
  // };

  const activateAvo = (avo) => {
    const hash = sha1(avo.email);
    const token = localStorage.getItem("token");
    axios.get(`http://127.0.0.1:8000/api/email/verify/${avo.id_av}/${hash}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        "Content-Type": "application/json", // Set the content type if required
      },
    })
      .then((response) => {
        setAvos(avos.map((item) => (item.id_av === avo.id_av ? response.data : item)));
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation: ", error);
      });
  };

  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {avos.map((avo) => (
          <tr key={avo.id_av}>
            <td>
              <div className="ms-3 ">
                <p className="fw-bold mb-1">{avo.first_name}</p>
              </div>
            </td>
            <td>{avo.last_name}</td>
            <td>
              <p className="text-muted mb-0">{avo.email}</p>
            </td>
            <td>
              <MDBBadge color={avo.email_verified_at ? "success" : "warning"} pill>
                {avo.email_verified_at ? "Activated" : "Pending"}
              </MDBBadge>
            </td>
            <td>
              <MDBBtn color="link" rounded size="sm" onClick={() => activateAvo(avo)}>
                Activate
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default AvoTable;
