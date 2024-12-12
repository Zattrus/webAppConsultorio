import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

export default function SiderBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">Consultorio X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link href="#login">
            <FaUser
              size={20}
              color="white"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
