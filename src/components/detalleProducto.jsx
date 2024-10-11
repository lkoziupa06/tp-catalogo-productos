import '../App.css';

export const DetalleProducto = ({ producto }) => {
    return (
        <div className="detalle-producto-card">
            <img src={producto.imagen} alt={producto.nombre} className="detalle-producto-imagen" />
            <div className="detalle-producto-info">
                <h2 className="detalle-producto-nombre">{producto.nombre}</h2>
                <p className="detalle-producto-categoria">{producto.categoria}</p>
                <p className="detalle-producto-precio">${producto.precio}</p>
                <p className="detalle-producto-descripcion">{producto.descripcion}</p>
            </div>
        </div>
    );
}
