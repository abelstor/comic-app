import { Col, Row } from 'react-bootstrap';

import { FavouritesModel } from '../models/FavouritesModel';
import { useLocalStorage } from '../../providers/useLocalStorage';
import FavIcon from '../../assets/icons/favourites.png';

export const FavouritesScreen = () => {

    const [storage] = useLocalStorage('comics', []);

    return (
        <div className="container">
            <h3 className="mt-3 text-center mb-4">
                <img className="screen__title"
                    src={FavIcon} alt="char" />
                {' '}
                My Favourites
            </h3>
            <div>
                <Row xs={1} md={2} lg={2} className="g-0">
                    {storage.map((per) => [
                        <Col key={per.id}>
                            <FavouritesModel
                                {...per}
                            />
                        </Col>
                    ])}
                </Row>
            </div>
        </div>
    )
}