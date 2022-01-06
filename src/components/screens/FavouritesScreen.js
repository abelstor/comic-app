import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { PaginationScreen } from './PaginationScreen';
import { useComicsById } from '../../helpers/useComicsById';
import CharIcon from '../../assets/icons/characters.png';
import { FavouritesModel } from '../models/FavouritesModel';

export const FavouritesScreen = () => {

    const { id } = useParams();
    console.log(id);
    const data = useComicsById(1011031); //1017851 //1009144 //1011297

    return (
        <div className="container">
            <h3 className='mt-3'>
                <img
                    className="screen__title"
                    src={CharIcon} alt="char" />
                {' '}
                My Favourites</h3>
            <div>
                <Row xs={1} md={2} lg={2} className="g-0">
                    {data.map((per) => [
                        <Col key={per.id}>
                            <FavouritesModel
                                id={per.id}
                                name={per.title}
                                description={per.description}
                                image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                                url={per.urls.map((it) => [
                                    <span key={it}>
                                        {it.url}
                                    </span>
                                ])}
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