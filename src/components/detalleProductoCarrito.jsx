import '../App.css';

export const DetalleProducto = ({ producto }) => {
    return (
        <div className="detalle-producto-card">
            <img src={producto.thumbnail} alt={producto.title} className="detalle-producto-imagen" />
            <div className="detalle-producto-info">
                <h2 className="detalle-producto-nombre">{producto.title}</h2>
                <p className="detalle-producto-categoria">{producto.category}</p>
                <p className="detalle-producto-precio">${producto.price}</p>
                <p className="detalle-producto-descripcion">{producto.description}</p>
            </div>
        </div>
    );
}