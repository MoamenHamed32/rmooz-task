import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavDropdown title="All Categeries" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Rings</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Necklaces</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Watches</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.5">Earrings</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Braceletes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">Anklet</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.8">Nose Raings</NavDropdown.Item>
        </NavDropdown>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Trending</Nav.Link>
            <Nav.Link href="/rings">Rings</Nav.Link>
            <Nav.Link href="/necklaces">Necklaces</Nav.Link>
            <Nav.Link href="/watches">Watches</Nav.Link>
            <Nav.Link href="/earrings">Earrings</Nav.Link>
            <Nav.Link href="/braceletes">Braceletes</Nav.Link>
            <Nav.Link href="/anklet">Anklet</Nav.Link>
            <Nav.Link href="/noseraings">Nose Raings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
