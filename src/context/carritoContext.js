import { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(producto => producto.id !== id));
  };

  const modificarCantidad = (id, cantidad) => {
    setCarrito((prevCarrito) => 
      prevCarrito.map(producto =>
        producto.id === id ? { ...producto, cantidad } : producto
      )
    );
  };

  const totalCompra = carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
  const cantidadTotalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarProducto,
      eliminarProducto,
      modificarCantidad,
      totalCompra,
      cantidadTotalProductos
    }}>
      {children}
    </CarritoContext.Provider>
  );
};