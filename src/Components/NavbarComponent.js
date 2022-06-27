import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useFireContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";


export default function NavbarComponent() {
  const { user, logOff } = useFireContext();
  const navigate = useNavigate();
  async function handleLogout(e) {
    e.preventDefault();
    await logOff();
    navigate("/");
  }
  return (
    <>
      {user ? (
        <>
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container fluid>
              <Navbar.Brand href="/">CS Network</Navbar.Brand>
              <Navbar.Toggle aria-controls="nav" />
              <Navbar.Collapse id="nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Profile</Nav.Link>
                  <Nav.Link href="/friends">Friends</Nav.Link>
                  <Nav.Link href="/marks">Marks</Nav.Link>
                  <Nav.Link href="/inbox">Inbox</Nav.Link>
                </Nav>
                <Nav className="me-right">
                  <Nav.Link>Welcome : {user.email}</Nav.Link>
                  <Button onClick={handleLogout} variant="secondary">
                    Logout
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
        <Welcome/>
        </>
      )}
    </>
  );
}
