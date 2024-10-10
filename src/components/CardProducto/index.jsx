import React from 'react';
import './cardProducto.css';

const CardProducto = ({producto}) => {
  return (
    <div className="card-producto" onClick={''}>
      <img src={producto.imagen} alt={producto.nombre} className="card-producto-imagen" />
      <h3 className="card-producto-titulo">{producto.nombre}</h3>
      <p className="card-producto-precio">${producto.precio}</p>
    </div>
  );
};

export default CardProducto;