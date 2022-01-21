import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import { FavouritesModel } from '../models/FavouritesModel';
import { useStateValue } from '../../providers/StateProvider';
import { useLocalStorage } from '../../providers/useLocalStorage';
import FavIcon from '../../assets/icons/favourites.png';

export const FavouritesScreen = () => {

    const [{ basket }] = useStateValue();
    const [, setStorage] = useLocalStorage('comics', []);

    useEffect(() => {

        if (basket.length === 0) {
            setStorage([]);
        }

    }, [basket, setStorage])

    return (
        <div className="container" style={{ marginBottom: 200 }}>
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