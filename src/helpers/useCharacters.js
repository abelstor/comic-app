import { useEffect, useState } from 'react';

const urlBase = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_APIKEY;

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(`${urlBase}?${apiKey}`)
            .then(resp => resp.json())
            .then(({ data }) => {
                setCharacters(data.results)
            })
    }, [])
    return characters;
}