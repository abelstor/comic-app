import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { ComicModel } from '../models/ComicModel';
import { PaginationScreen } from './PaginationScreen';
import { useComicsById } from '../../helpers/useComicsById';
import CharIcon from '../../assets/icons/characters.png';

export const ListComicScreen = () => {

    const { id } = useParams();
    const data = useComicsById(id);

    return (
        <div className="container">
            <h3 className='mt-3'>
                <img
                    className="screen__title"
                    src={CharIcon} alt="char" />
                {' '}
                Comics</h3>
            <div>
                <Row xs={1} md={2} className="g-0">
                    {data.map((per) => [
                        <Col key={per.id}>
                            <ComicModel
                                id={per.id}
                                name={per.title}
                                // urls={`${per.urls[0].url}`}
                                image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                            // items={per.comics.items.map((it) => (it.name))}
                            />
                        </Col>
                    ])}
                </Row>
            </div>
            <div className="screen__nextPage">
                <PaginationScreen />
            </div>
        </div>
    )
}
