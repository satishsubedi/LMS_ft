import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/lmslogo.jpg";
import { IoHome } from "react-icons/io5";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { logoutUserApi } from "../../services/authAPI";
import { setUser } from "../../features/user/userSlice";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import InputGroup from "react-bootstrap/InputGroup";
export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleOnLogOut = () => {
    // call api to logout
    logoutUserApi();
    // logout from frontend
    sessionStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
    dispatch(setUser({}));
  };
  return (
    <Navbar expand="md" className="bg-success" variant="dark">
      <Container>
        <Link to="/" className="nav-link">
          <img src={logo} width="50px" alt="" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav " className="mt-2">
          <div className="w-100 d-flex justify-content-between flex-column flex-md-row ">
            <div></div>

            <Form style={{ width: "40%" }}>
              <InputGroup>
                <Form.Control
                  placeholder="Search Book"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2" className="bg-warning">
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>

            <Nav>
              <Link className="nav-link " to="/">
                <IoHome /> Home
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link " to="/user">
                    <RiDashboard3Fill />
                    Dashboard
                  </Link>
                  <Link className="nav-link " to="/" onClick={handleOnLogOut}>
                    <IoIosLogOut />
                    Log Out
                  </Link>
                  <div className="nav-link fw-bolder  user">{user.fName}</div>
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
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export default Header;
