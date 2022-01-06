import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { ComicListModel } from '../models/ComicListModel';
import { useComicsById } from '../../helpers/useComicsById';
import FavIcon from '../../assets/icons/favourites.png';

export const ListFavouritesScreen = () => {

    const data = useComicsById(1011031);

    return (
        <>
            <Link to={'favourites'} className="text__link">
                <h3 className="mt-3 text-center">
                    <img src={FavIcon} alt="char" />
                    {'  '}
                    My Favourites
                </h3>
            </Link>
            <Row xs={1} md={1}>
                {data.map((per) => [
                    <Col key={per.id}>
                        <ComicListModel
                            id={per.id}
                            name={per.title}
                            image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                        />
                    </Col>
                ])}
            </Row>
        </>
    )
}