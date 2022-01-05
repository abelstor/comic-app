import { Col, Row } from 'react-bootstrap';

import { ComicListModel } from '../models/ComicListModel';
import { useComicsById } from '../../helpers/useComicsById';
import FavIcon from '../../assets/icons/favourites.png';

export const FavouritesScreen = () => {

    const data = useComicsById(1009144);

    return (
        <>
            <h3 className="mt-3 text-center">
                <img src={FavIcon} alt="char" />
                {'  '}
                My Favourites
            </h3>
            <Row xs={1} md={1}>
                {data.map((per) => [
                    <Col key={per.id}>
                        <ComicListModel
                            id={per.id}
                            description={per.title}
                            image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                        />
                    </Col>
                ])}
            </Row>
        </>
    )
}