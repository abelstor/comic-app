import { Col, Row } from 'react-bootstrap';

import { useComicsById } from '../../helpers/useComicsById';
import { ComicModel } from '../comicModel/ComicModel';
import Fav from '../../assets/icons/favourites.png';

export const MyFavourites = () => {

    const data = useComicsById(1009149);

    return (
        <>
            <h3 className="mt-3 text-center">
                <img src={Fav} alt="char" />
                {'  '}
                My Favourites
            </h3>
            <Row xs={1} md={1}>
                {data.map((per) => [
                    <Col key={per.id}>
                        <ComicModel
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