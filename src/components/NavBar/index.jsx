import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";

export const NavBar = () =>{
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
            <Nav className='nav'>
                <Link className= "nav-link" to="/">Home</Link>
                <Link className= "nav-link" to="/contacto">Contacto</Link>
                <Link className= "nav-link" to="/estadisticas">Estadisticas</Link>
            </Nav>
      </Navbar>
      <Outlet />
    </>
    
  );
}