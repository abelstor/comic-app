import { Col, Row } from 'react-bootstrap';

import { FavouritesModel } from '../models/FavouritesModel';
import { useStateValue } from '../../providers/StateProvider';
import FavIcon from '../../assets/icons/favourites.png';

export const FavouritesScreen = () => {

    const [{ basket }] = useStateValue();

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
                    {basket.map((per) => [
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