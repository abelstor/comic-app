import { useParams } from 'react-router-dom';

export const ComicList = () => {

    const { id } = useParams();
    console.log({ id });

    return (
        <div className="container mt-5">
            <h4>Comics del character con el id: {id}</h4>
        </div>
    )
}
