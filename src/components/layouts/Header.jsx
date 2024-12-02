import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/lmslogo.jpg";
import { IoHome } from "react-icons/io5";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";
export const Header = () => {
  return (
    <Navbar expand="md" className="bg-success" variant="dark">
      <Container>
        <Link to="/" className="nav-link">
          <img src={logo} width="50px" alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link " to="/">
              <IoHome /> Home
            </Link>
            <Link className="nav-link " to="/signup">
              <VscSignIn />
              Sign Up
            </Link>
            <Link className="nav-link " to="/login">
              <VscSignOut /> Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export default Header;
