import React, { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';

export default function Carrito() {
  const { carrito, eliminarProducto, modificarCantidad, totalCompra } = useContext(CarritoContext);

  return (
    <div className="carrito-page">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map(producto => (
          <li key={producto.id}>
            {producto.title} - ${producto.price} x {producto.cantidad}
            <div>
              <button onClick={() => modificarCantidad(producto.id, producto.cantidad - 1)}>-</button>
              <button onClick={() => modificarCantidad(producto.id, producto.cantidad + 1)}>+</button>
              <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalCompra.toFixed(2)}</h3>
    </div>
  );
}
