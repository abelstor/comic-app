import { useEffect, useState } from 'react';

const urlBase = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_APIKEY;

export const useComicsById = (id) => {
    const [comicsById, setComicsById] = useState([]);
    useEffect(() => {
        fetch(`${urlBase}/${id}/comics?${apiKey}`)
            .then(resp => resp.json())
            .then(({ data }) => {
                setComicsById(data.results)
            })
    }, [id])
    return comicsById;
}