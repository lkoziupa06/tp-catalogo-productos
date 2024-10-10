import '../App.css';
export const FilterButton = ({ categoria, seleccionada, onClick }) => {
    return (
        <button
            className={`filter-button ${seleccionada ? 'selected' : ''}`}
            onClick={onClick}
        >
            {categoria}
        </button>
    );
};
