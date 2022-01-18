import { useEffect, useState } from 'react';
import { useComicsById } from '../helpers/useComicsById';

export const useFetchById = (id) => {

    const data = useComicsById(id);

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        setTimeout(() => {

            setState({
                data: data,
                loading: false
            });
        }, 500);

    }, [data])

    return state;
}
