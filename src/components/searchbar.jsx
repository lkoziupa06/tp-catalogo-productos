import { useState } from 'react';
import '../App.css'; 
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Buscar producto..."
                value={searchTerm}
                onChange={handleInputChange}
                className="search-bar"
            />
            <SearchIcon className="search-icon"/>
        </div>
    );
};
