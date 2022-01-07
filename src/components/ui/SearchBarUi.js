import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../providers/useForm';
import SearchIcon from '../../assets/icons/search.png';
import './ui.css';

export const SearchBarUi = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText: q,
    })
    const { searchText } = values;


    const handleSubmit = (e) => {
        navigate(`?q=${searchText}`);
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
                    name="searchText"
                    value={searchText}
                    onChange={handleInputChange}
                    placeholder="Search character..."
                    className="search__input"
                />
            </div>
            <div className="search__bt">
                <button type="submit" className="search__button">
                    <img src={SearchIcon} alt="search" />
                </button>
            </div>
        </form>
    )
}