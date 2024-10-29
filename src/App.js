import './App.css';
import CardProducto from './components/CardProducto';
import { CarruselHome } from './components/carruselHome';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [productosAleatorios, setProductosAleatorios] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const productos = response.data.products.sort(() => 0.5 - Math.random()).slice(0, 6);
        setProductosAleatorios(productos);
      })
      .catch(error => console.error("Error al obtener los productos:", error));
  }, []);

  return (
    <div className="App">
      <div className='carrusel-home-container'>
        <CarruselHome/>
      </div>
      <h2>Productos</h2>
      <div className='container-productos'>
        {productosAleatorios.map(producto => (
          <CardProducto key={producto.id} producto={producto}/>
        ))}
      </div>
    </div>
  );
}

export default App;
