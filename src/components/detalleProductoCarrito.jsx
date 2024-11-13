import React from 'react';
import '../App.css';

export const DetalleProductoCarrito = ({ producto, modificarCantidad, eliminarProducto }) => {
    return (
        <div className="detalle-producto-card">
            <img src={producto.thumbnail} alt={producto.title} className="detalle-producto-imagen" />
            <div className="detalle-producto-info">
                <h2 className="detalle-producto-nombre">{producto.title} x {producto.cantidad}</h2>
                <p className="detalle-producto-categoria">{producto.category}</p>
                <p className="detalle-producto-precio">${producto.price}</p>
                <p className="detalle-producto-descripcion">{producto.description}</p>
                <div className="detalle-producto-controles">
                    <button onClick={() => modificarCantidad(producto.id, producto.cantidad - 1)}>-</button>
                    <button onClick={() => modificarCantidad(producto.id, producto.cantidad + 1)}>+</button>
                    <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    );
};
