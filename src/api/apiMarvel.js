import { useEffect, useState } from 'react';

const baseUrl = 'https://gateway.marvel.com:443/v1/public/';
const keyPublic = '?ts=1&apikey=62396127a5391d5b711634495f01b0f3';
const hash = '&hash=71c1847e4797437748d246452ba4695e';

export const useApi = (type) => {

    const [comicScreen, setComicScreen] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}${type}${keyPublic}${hash}`)
            .then(resp => resp.json())
            .then(({ data }) => {
                setComicScreen(data.results)
            })
    }, [type])
    return comicScreen;
}