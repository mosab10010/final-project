import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"

function NavbarItem() {
  const { logout } = useContext(FilmsContext)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://storage.googleapis.com/ff-storage-p01/festivals/logos/000/039/385/large/logo.jpg?1498668430"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span> My Films</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/films">
              Films
            </Link>
            <NavDropdown title="Cast" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/actors">
                Actors
              </Link>

              <NavDropdown.Divider />
              <Link className="dropdown-item" to="/directors">
                Directors
              </Link>
            </NavDropdown>
          </Nav>
          {localStorage.tokenFilms ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
