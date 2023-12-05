import React, { useEffect, useState } from "react";
import "../../style/avoListStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBBadge } from "mdb-react-ui-kit";

const AvoTable = () => {
  const [avos, setAvos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/avos")
      .then((response) => response.json())
      .then((data) => setAvos(data));
  }, []);


  fetch('http://127.0.0.1:8000/api/avos')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => setAvos(data))
      .catch(error => console.error('There has been a problem with your fetch operation: ', error));



  const activateAvo = (id_av) => {
    fetch(`http://127.0.0.1:8000/api/email/verify/${id_av}/hash`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setAvos(avos.map((avo) => (avo.id_av === id_av ? data : avo)));
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
              <MDBBtn color="link" rounded size="sm" onClick={() => activateAvo(avo.id_av)}>
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
