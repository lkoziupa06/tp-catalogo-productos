import React, { useContext } from 'react';
import './cardProducto.css';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../context/carritoContext.js';

const CardProducto = ({ producto }) => {
  const navigate = useNavigate();
  const { agregarProducto } = useContext(CarritoContext);

  const handleClick = () => {
    navigate(`/producto/${producto.id}`);
  };

  const handleAgregarCarrito = (e) => {
    e.stopPropagation(); 
    agregarProducto(producto);
  };

  return (
    <div className="card-producto" onClick={handleClick}>
      <img src={producto.thumbnail} alt={producto.title} className="card-producto-imagen" />
      <h3 className="card-producto-titulo">{producto.title}</h3>
      <p className="card-producto-precio">${producto.price}</p>
      <button className="btn-agregar-carrito" onClick={handleAgregarCarrito}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default CardProducto;
