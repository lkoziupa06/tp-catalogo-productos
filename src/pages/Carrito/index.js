import React, { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';
import { DetalleProductoCarrito } from '../../components/detalleProductoCarrito';
import '../../App.css'

export default function Carrito() {
  const { carrito, eliminarProducto, modificarCantidad, totalCompra } = useContext(CarritoContext);

  return (
    <div className="producto-container">
      <div className='title-container'>
        <h2 className='title'>Carrito de Compras</h2>
      </div>
      <ul>
        {carrito.map(producto => (
          <li className='list-carrito'key={producto.id}>
            <DetalleProductoCarrito
              producto={producto}
              modificarCantidad={modificarCantidad}
              eliminarProducto={eliminarProducto}
            />
          </li>
        ))}
      </ul>
      <div className='title-container'>
        <h3>Total: ${totalCompra.toFixed(2)}</h3>
      </div>
    </div>
  );
}
