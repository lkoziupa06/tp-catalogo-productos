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
      <img src={producto.thumbnail} alt={producto.title} className="card-producto-imagen" />
      <h3 className="card-producto-titulo">{producto.title}</h3>
      <p className="card-producto-precio">${producto.price}</p>
    </div>
  );
};

export default CardProducto;