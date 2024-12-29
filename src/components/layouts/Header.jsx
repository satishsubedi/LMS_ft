import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/lmslogo.jpg";
import { IoHome } from "react-icons/io5";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
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
            {user?._id ? (
              <>
                <Link className="nav-link " to="/user">
                  <RiDashboard3Fill />
                  Dashboard
                </Link>
                <Link className="nav-link " to="/">
                  <IoIosLogOut />
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link " to="/signup">
                  <VscSignIn />
                  Sign Up
                </Link>
                <Link className="nav-link " to="/login">
                  <VscSignOut /> Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export default Header;
