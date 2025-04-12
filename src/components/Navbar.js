import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import Logo from '../images/whiteLogo.png';
import '../css/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="transparent" className=" navigation_bar mx-3  mb-3 p-2">
      <Container>
        <img src={Logo} alt="Eunoia" style={{ height: '120px', marginRight: '8px' }} />
        
        <Navbar.Toggle />
        <Navbar.Collapse className='collapse p-3'>
          <Nav className="ms-auto ">
            <Nav.Link href="/" className="navTitle mx-md-3">Home</Nav.Link>
            
            <NavDropdown
  className="NavDropdown bg-transparent rounded-0 border-0"
  title={
    <span className="navTitle">
      Advice <FontAwesomeIcon icon={faChevronDown} className="ms-2 mx-md-3" />
    </span>
  }
  id="advice-dropdown"
>
  <NavDropdown.Item href="#advice1">Anxiety</NavDropdown.Item>
  <NavDropdown.Item href="#advice2">Depression</NavDropdown.Item>
</NavDropdown>

<NavDropdown
  className="NavDropdown bg-transparent rounded-0 border-0"
  title={
    <span className="navTitle">
      Time Management <FontAwesomeIcon icon={faChevronDown} className="ms-2 mx-3" />
    </span>
  }
  id="time-dropdown"
>
  <NavDropdown.Item href="#tm1">Focus</NavDropdown.Item>
  <NavDropdown.Item href="#tm2">Productivity</NavDropdown.Item>
</NavDropdown>

          </Nav>
          <Button
  as={Link}
  to="/login"
  className="mt-3 mt-md-0 rounded-pill px-4 login"
  variant="outline-primary"
>
  Login
</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
