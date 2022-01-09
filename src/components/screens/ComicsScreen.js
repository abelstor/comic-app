// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { ComicModel } from '../models/ComicModel';
import { useComicsById } from '../../helpers/useComicsById';
import CharIcon from '../../assets/icons/characters.png';

export const ComicsScreen = () => {

    const { id } = useParams();
    const data = useComicsById(id);

    // useEffect(() => { //TODO. useEffect
    //     return () => {
    //         window.removeEventListener();
    //     }
    // }, [data])

    return (
        <div className="container">
            <h3 className='mt-3'>
                <img
                    className="screen__title"
                    src={CharIcon} alt="char" />
                {' '}
                Related comics</h3>
            <div>
                <Row xs={1} md={2} lg={3} className="g-0">
                    {data.map((per) => [
                        <Col key={per.id}>
                            <ComicModel
                                id={per.id}
                                name={per.title}
                                description={per.description}
                                image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                                url={per.urls.map((it) => [
                                    <span key={it.id}>
                                        {it.url}
                                    </span>
                                ])}
                            />
                        </Col>
                    ])}
                </Row>
            </div>
        </div>
    )
}
