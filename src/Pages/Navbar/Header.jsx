import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import { removeStoredAuthToken } from "../../utils/authToken";
import { BiUserCircle } from "react-icons/bi";
import { showToast } from "../../Component/Toast";
import "../page.css";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    removeStoredAuthToken();
    navigate("/login");
    showToast("success", "Logout Successfully");
  };
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid className="d-flex ps-5">
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} alt="Hotel" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/rooms">
                Rooms
              </Nav.Link>
            </Nav.Item>            

            {localStorage.getItem("access_token") ? (
              <DropdownButton
                className="dropdown me-5"
                variant="Light"
                id="basic-navbar-nav"
                title={
                  <i>
                    <BiUserCircle color="green" size={50} />
                  </i>
                }
              >                
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>                
                <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>              
              </DropdownButton>
            ) : (
              <Nav.Item className="dropdown d-flex">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
