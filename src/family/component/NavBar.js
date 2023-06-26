import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import photo from "./images/Logo.png";
import { useState } from "react";
export default function NavBar(props) {
  let history = useNavigate();
  const [active, seActive] = useState(props.active);
  const logout = (e) => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/logout", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              localStorage.removeItem("user_id");
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              history("/");
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
  return (
    <div className="">
      <Navbar key="md" expand="md" className="py-2col for-box">
        <Container fluid>
          <Navbar.Brand className="ms-4 me-5">
            <Link to="/family" className="d-flex nav-link">
              <img src={photo} alt="no image" className="logo-f d-block"></img>
              <strong className="fs-4 ms-2">SAFA</strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md}`}>
                Menus
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ps-5 ms-5">
                <Link to="/family" className="nav-link">
                  home
                </Link>
                <Link to="/familyAssessment" className="nav-link">
                  Assessment
                </Link>
                {active === 3 ? (
                  <Link to="/family" className="nav-link">
                    Attendance
                  </Link>
                ) : (
                  <Link to="/family" className="nav-link">
                    <strong>Attendance</strong>
                  </Link>
                )}

                <Link to="/family" className="nav-link">
                  Complian
                </Link>
                <Link to="/family" className="nav-link">
                  Comment
                </Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <NavDropdown
                  title="Family"
                  id={`offcanvasNavbarDropdown-expand-md`}>
                  <NavDropdown.Item href="#action3">
                    <FaUser size={30} color="#086289" />
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Change password
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
