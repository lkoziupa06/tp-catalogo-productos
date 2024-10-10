import './App.css';
import CardProducto from './components/CardProducto';
import { CarruselHome } from './components/carruselHome';
import productos from './arrayProductos';

function App() {
  const productosAleatorios = productos
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 6); 

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
