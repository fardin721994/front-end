import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import { height } from "@mui/system";
import "./NavBar.css";
function NavBar(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="my-nav"
    >
      {!props.logInstatus ? (
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="200"
              // height="160"
              className="d-inline-block align-center me-3"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100">
              <Nav.Link as={Link} to="/" eventKey={1}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/courses/all" eventKey={2}>
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/courses/new" eventKey={3}>
                NewCourse
              </Nav.Link>
              <Nav.Link as={Link} to="/audios/new" eventKey={4}>
                Save Audio
              </Nav.Link>
              <Nav.Link as={Link} to="/images/new" eventKey={5}>
                Save Image
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/registration"
                eventKey={6}
                className="ms-lg-auto"
              >
                Sign up
              </Nav.Link>
              <Nav.Link eventKey={7} as={Link} to="/login" className="me-3">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      ) : (
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="200"
              className="d-inline-block align-center me-3"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100">
              <Nav.Link as={Link} to="/" eventKey={1}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/courses/all" eventKey={2}>
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/courses/all" eventKey={3}>
                MyCourses
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/registration"
                className="ms-lg-auto"
                eventKey={4}
              >
                Full Name
              </Nav.Link>
              <Nav.Link
                eventKey={5}
                onClick={props.logOutStatusHandler}
                className="me-3"
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
}

export default NavBar;
