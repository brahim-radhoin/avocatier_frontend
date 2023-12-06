import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Navbar from "./Components/Navbar";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/avo/register", {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });
      setErrors({});

      localStorage.setItem("token", response.data.token);
      navigate("/avo_landing_page");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const serverErrors = error.response.data.errors;
        const newErrors = {};
        for (let key in serverErrors) {
          newErrors[key] = serverErrors[key][0];
        }
        setErrors(newErrors);
      } else {
        console.error("Signup failed", error);
      }
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Bienvenue</h2>
                  <p className=" mb-5">SVP entrer votre email et mot de passe!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3 left-align-label " controlId="formBasicFirstName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Entrer votre prénom"
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.first_name && <p className="error">{errors.first_name}</p>}
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3 left-align-label" controlId="formBasicLastName">
                            <Form.Label>Prenome</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Entrer votre nom"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.last_name && <p className="error">{errors.last_name}</p>}
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3 left-align-label" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Entrer votre email" onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3 left-align-label" controlId="formBasicPassword">
                        <Form.Label>Mote de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <p className="error">{errors.password}</p>}
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Vous avez deja un compt?{" "}
                        <a href="/login" className="text-primary fw-bold">
                          Connecter
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

export default SignupPage;
