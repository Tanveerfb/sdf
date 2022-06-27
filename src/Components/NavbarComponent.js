import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useFireContext } from "../Context";

export default function NavbarComponent() {
  const { user } = useFireContext();
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">CS Network</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/friends">Friends</Nav.Link>
            <Nav.Link href="/marks">Marks</Nav.Link>
            <Nav.Link href="/inbox">Inbox</Nav.Link>
          </Nav>
          {user ? (
            <>
              <Nav className="me-right">
                <Nav.Link>Welcome : {user.email}</Nav.Link>
                <Button variant="secondary">Logout</Button>
              </Nav>
            </>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </>
  );
}
