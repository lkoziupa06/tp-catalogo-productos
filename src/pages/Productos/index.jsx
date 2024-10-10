import { useState } from 'react';
import '../../App.css';
import productos from '../../arrayProductos';
import CardProducto from '../../components/CardProducto';
import { SearchBar } from '../../components/searchbar';
import { FilterButton } from '../../components/filterButton';

export default function Productos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    const categorias = [...new Set(productos.map(producto => producto.categoria))];

    const productosFiltrados = productos.filter(producto => {
        const coincideNombre = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        const coincideCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
        return coincideNombre && coincideCategoria;
    });

    return (
        <div className='App'>
            <div className="search-container">
                <SearchBar onSearch={setSearchTerm} />
                <div className="categoria-botones">
                    <FilterButton categoria="Todas" seleccionada={categoriaSeleccionada === ''} onClick={() => setCategoriaSeleccionada('')} />
                    {categorias.map((categoria, index) => (
                        <FilterButton key={index} categoria={categoria} seleccionada={categoriaSeleccionada === categoria} onClick={() => setCategoriaSeleccionada(categoria)} />
                    ))}
                </div>
            </div>

            <div className='container-productos'>
                {productosFiltrados.map(producto => (
                    <CardProducto key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
}
