import { useEffect, useState } from 'react';

const urlBase = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_APIKEY;

export const useComicsById = (id) => {
    const [comicsById, setComicsById] = useState([]);
    useEffect(() => {
        fetch(`${urlBase}/${id}/comics?limit=100&${apiKey}`)
            .then(resp => resp.json())
            .then(({ data }) => {
                setComicsById(data.results)
            }).catch(err => {
                console.warn(err);
            })
    }, [id])
    return comicsById;
}