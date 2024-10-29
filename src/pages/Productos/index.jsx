import { useState, useEffect } from 'react';
import '../../App.css';
import CardProducto from '../../components/CardProducto';
import { SearchBar } from '../../components/searchbar';
import { FilterButton } from '../../components/filterButton';
import axios from 'axios';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    // Obtener todos los productos al cargar la página
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProductos(response.data.products);
        setProductosFiltrados(response.data.products);
      })
      .catch(error => console.error("Error al obtener productos:", error));
  }, []);

  // Derivar categorías de los productos iniciales
  const categorias = [...new Set(productos.map(producto => producto.category))];

  const handleCategoryClick = (categoria) => {
    setCategoriaSeleccionada(categoria);

    if (categoria === '') {
      // Mostrar todos los productos si se selecciona "Todas"
      setProductosFiltrados(productos);
    } else {
      // Filtrar los productos originales según la categoría seleccionada
      setProductosFiltrados(productos.filter(producto => producto.category === categoria));
    }
  };

  // Filtrar productos por término de búsqueda en productos filtrados
  const productosBuscados = productosFiltrados.filter(producto =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='App'>
      <div className="search-container">
        <SearchBar onSearch={setSearchTerm} />
        <div className="categoria-botones">
          <FilterButton
            categoria="Todas"
            seleccionada={categoriaSeleccionada === ''}
            onClick={() => handleCategoryClick('')}
          />
          {categorias.map((categoria, index) => (
            <FilterButton
              key={index}
              categoria={categoria}
              seleccionada={categoriaSeleccionada === categoria}
              onClick={() => handleCategoryClick(categoria)}
            />
          ))}
        </div>
      </div>

      <div className='container-productos'>
        {productosBuscados.map(producto => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}


