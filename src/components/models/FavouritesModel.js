import { Card, Row, Col, Image } from 'react-bootstrap';

import { useStateValue } from '../../providers/StateProvider';
import DeleteIcon from '../../assets/icons/btn-delete.png';
import LinkArrow from '../../assets/icons/link-arrow.png';
import './models.css';

export const FavouritesModel = ({ id, url, name, image, description }) => {

    const [, dispatch] = useStateValue();

    const removeFovourite = () => {
        dispatch({
            type: 'REMOVE_FROM_FAVOURITES',
            id: id
        });
    }

    const [urlApi] = url.slice(0, 1);
    const [source] = urlApi.map(el => el.props.children);

    const info = (!description ? 'Description not provided' : description).slice(0, 200);

    return (
        <div className="character__content animate__animated animate__fadeIn">
            <Card style={{ width: "28rem" }} className="character__card">
                <Row xs={1} md={2} className="g-0">
                    <Col>
                        <Image
                            variant="top"
                            src={image}
                            alt="comic"
                            className="character__image zoomImg"
                        />
                    </Col>
                    <Col>
                        <Card.Body>
                            <button
                                onClick={removeFovourite}
                                className="favourite__delete_button">
                                <img src={DeleteIcon} alt="delete" />
                            </button>
                            <Card.Title>
                                {name}</Card.Title>
                            <Card.Text className="character__text">
                                {info}
                            </Card.Text>
                        </Card.Body>
                        <br />
                        <Card.Title className="character__title">Official source</Card.Title>
                        <Card.Text className=" character__text__item animate__animated animate__fadeInLeft">
                            <a href={source} target="_blank" rel="noreferrer noopener">
                                <img className="text__content"
                                    src={LinkArrow} alt="arrow">
                                </img>
                            </a>
                        </Card.Text>
                    </Col>
                </Row>
                <Col className="character__text__item">
                </Col>
            </Card>
        </div>
    )
}