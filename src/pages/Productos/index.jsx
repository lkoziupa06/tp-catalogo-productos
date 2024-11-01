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
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProductos(response.data.products);
        setProductosFiltrados(response.data.products);
      })
      .catch(error => console.error("Error al obtener productos:", error));
  }, []);

  const categorias = [...new Set(productos.map(producto => producto.category))];

  const handleCategoryClick = (categoria) => {
    setCategoriaSeleccionada(categoria);

    if (categoria === '') {
      setProductosFiltrados(productos);
    } else {
      setProductosFiltrados(productos.filter(producto => producto.category === categoria));
    }
  };

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


