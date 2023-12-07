import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/user/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      const decodedToken = jwtDecode(response.data.token);
      localStorage.setItem("User type", decodedToken.user_type);

      console.log("User type:", decodedToken.user_type); // ! for debugging only remember to delete later
      console.log("User id:", decodedToken.sub);         // ! for debugging only remember to delete later
      console.log("Decoded token:", decodedToken);       // ! for debugging only remember to delete later
      setIsLoggedIn(true);

      setErrors({});
      if (decodedToken.user_type === "admin") {
        navigate("/avo_table");
      } else if (decodedToken.user_type === "avo") {
        navigate("/avo_landing_page");
      } else {
        navigate("/user_landing_page");
      }
    } catch (error) {
      setIsLoggedIn(false);
      if (error.response && error.response.status === 401) {
        const errorMessage = "Email ou mote de passe incorrect";
        setErrors({ login: errorMessage });
      } else {
        console.error("Login failed", error);
      }
    }
  };

  return (
    <div>
      {/* <Navbar/> */}
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">AVOCATIER</h2>
                  <p className=" mb-5">SVP entrer voter email est mote de passe</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Entre votre email" onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mote de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mote de passe" onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <p className="error">{errors.password}</p>}
                      </Form.Group>

                      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Mote de passe oublier?
                          </a>
                        </p>
                      </Form.Group> */}

                      {errors.login && <p className="error">{errors.login}</p>}
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Connecter
                        </Button>
                      </div>
                    </Form>

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Vous n'avez pas un compt ?{" "}
                        <a href="/signup" className="text-primary fw-bold">
                          Cree un compt
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
