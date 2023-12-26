import React from "react"
import { Button } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, useNavigate } from "react-router-dom"

const Navigation = ({isAuth}) => {
    const navigate = useNavigate ()
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {isAuth ? (
            <>
              <Button onClick={() => navigate("/profile")}>Profile</Button>{" "}
              <Button variant="outline-primary" style={{ marginLeft: "10px" }}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button>Sign In</Button>
          )}
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
