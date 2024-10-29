import { useParams } from 'react-router-dom';
import '../../App.css';
import { DetalleProducto } from '../../components/detalleProducto';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Producto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProducto(response.data))
      .catch(error => console.error("Error al obtener el producto:", error));
  }, [id]);

  return (
    <div className='producto-container'>
      {producto ? <DetalleProducto producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
}
