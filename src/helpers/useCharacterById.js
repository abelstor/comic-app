import { useEffect, useState } from 'react';

const urlBase = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_APIKEY;

export const useCharacterById = (id) => {
    const [characterById, setCharacterById] = useState([]);
    useEffect(() => {
        fetch(`${urlBase}/${id}?${apiKey}`)
            .then(resp => resp.json())
            .then(({ data }) => {
                setCharacterById(data.results)
            })
    }, [id])
    return characterById;
}