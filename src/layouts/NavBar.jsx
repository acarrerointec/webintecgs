
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import "./navbar.css";


const NavBarMain = () => {
  const handleOpenEmail = () => {
    window.location.href = "mailto:info@intecgs.com?subject=Contact";
  };

  return (
    <div>
       <Navbar expand="lg" className="bg-body-light" >
      <Container>
      <Image src="/logo.png" thumbnail className="Logo "  alt="Intecgs" />
        <Navbar.Brand  as={Link} to='/'></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to='/'> Home</Nav.Link>
            <Nav.Link  as={Link} to='/services'>Our Services</Nav.Link>
            <Nav.Link  as={Link} to='/work'>Our Work</Nav.Link>
            <Nav.Link  as={Link} to='/about'>About</Nav.Link>
            <button className="btn btn-success" onClick={handleOpenEmail}>
      Contact
    </button>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <section>
        <Outlet> </Outlet>
    </section>


    </div>
  )
}

export default NavBarMain
