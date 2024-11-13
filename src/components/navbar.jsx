import React, { useContext, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import { CarritoContext } from '../context/carritoContext.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';

export const NavBar = () => {
  const { carrito, cantidadTotalProductos, totalCompra } = useContext(CarritoContext);
  const [isOpen, setIsOpen] = useState(false);

  console.log("¿Desplegable abierto?", isOpen);
  console.log("Contenido del carrito:", carrito);

  const toggleCarrito = () => {
      setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar sticky-navbar">
        <Nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/contacto">Contacto</Link>
          <Link className="nav-link" to="/productos">Productos</Link>
        </Nav>
        <div className="carrito-container" onClick={toggleCarrito}>
          <ShoppingCartIcon />
          {cantidadTotalProductos > 0 && <span className="contador">{cantidadTotalProductos}</span>}
          {isOpen && (
            <div className="carrito-desplegable">
             <h4>Carrito de Compras</h4>
             {carrito.length === 0 ? (
               <p>El carrito está vacío</p>
             ) : (
               <>
                 <ul>
                   {carrito.map((producto) => (
                     <li key={producto.id}>
                       {producto.title} - ${producto.price} x {producto.cantidad}
                     </li>
                   ))}
                 </ul>
                 <p>Total: ${totalCompra}</p>
               </>
             )}
             <Link to="/carrito">
               <button>Ver Carrito</button>
             </Link>
           </div>
          )}
        </div>
      </Navbar>
      <Outlet />
    </>
  );
};