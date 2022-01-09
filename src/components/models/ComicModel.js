import { Card, Row, Col } from 'react-bootstrap';

// import { ModalComic } from '../ui/ModalComic';
import { useStateValue } from '../../providers/StateProvider';
import './models.css';

export const ComicModel = ({ id, url, name, image, description }) => {

    const [, dispatch] = useStateValue();

    const addToFavourites = () => {
        dispatch({
            type: 'ADD_TO_FAVOURITES',
            item: {
                id: id,
                url: url,
                name: name,
                image: image,
                description: description
            }
        })
    }

    return (
        <div className="comic__content animate__animated animate__fadeInRight">
            <Card style={{ width: "16rem" }} className="comic__card">
                <div className="margen">
                    <Row>
                        <Col>
                            <Card.Img
                                variant="top"
                                src={image}
                                alt="comic"
                                className="mt-4" />
                            <Card.Body>
                                <Card.Text>
                                    {name}
                                </Card.Text>
                                <button
                                    className="btn comic__button"
                                    onClick={addToFavourites}
                                >add to favourites</button>
                                {/* <ModalComic/> */}
                            </Card.Body>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    )
}