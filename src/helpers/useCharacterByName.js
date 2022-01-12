import { useEffect, useState } from 'react';

const urlBase = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_APIKEY;

export const useCharacterByName = (name) => {
    const [characterByName, setCharacterByName] = useState([]);
    useEffect(() => {
        fetch(`${urlBase}?nameStartsWith=${name}&${apiKey}`)
            .then(resp => resp.json())
            .then(({ data }) => {
                setCharacterByName(data.results)
            }).catch(err => {
                console.warn(err);
            })
    }, [name])
    return characterByName;
}