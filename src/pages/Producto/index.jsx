import { useParams } from 'react-router-dom';
import '../../App.css';
import productos from '../../arrayProductos';
import { DetalleProducto } from '../../components/detalleProducto';
export default function Producto(){
    const { id } = useParams();
    const producto = productos.find(p => p.id === String(id));
    return(
        <div className='producto-container'>
            <DetalleProducto producto={producto}/>
        </div>
    )
}