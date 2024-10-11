import React from 'react';
import './cardProducto.css';
import { useNavigate } from 'react-router-dom';

const CardProducto = ({producto}) => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/producto/${producto.id}`)
  }
  return (
    <div className="card-producto" onClick={handleClick}>
      <img src={producto.imagen} alt={producto.nombre} className="card-producto-imagen" />
      <h3 className="card-producto-titulo">{producto.nombre}</h3>
      <p className="card-producto-precio">${producto.precio}</p>
    </div>
  );
};

export default CardProducto;