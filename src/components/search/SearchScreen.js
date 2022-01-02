import { useState } from 'react';

import Search from '../../assets/icons/search.png';
import './search.css';

export const SearchScreen = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="search__form"
        >
            <div className="search__in">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search character..."
                    className="search__input"
                />
            </div>
            <div className="search__bt">
                <button type="submit" className="search__button">
                    <img src={Search} alt="search" />
                </button>
            </div>
        </form>
    )
}