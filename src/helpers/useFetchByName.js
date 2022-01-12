import { useEffect, useState } from 'react';

import { useCharacterByName } from '../helpers/useCharacterByName';

export const useFetchByName = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('q');

    const data = useCharacterByName(myParam);

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        setState({
            data: data,
            loading: false
        });
    }, [data])

    return state;
}