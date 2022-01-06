import { Card, Row, Col, Image } from 'react-bootstrap';

import DeleteIcon from '../../assets/icons/btn-delete.png';
import LinkArrow from '../../assets/icons/link-arrow.png';
import './models.css';

export const FavouritesModel = ({ image, description, name, id, url }) => {

    const info = (!description ? 'Description not provided' : description).slice(0, 200);
    const urlComic = ((url === undefined) ? 'Url not provided' : url).splice(0, 1);
    const [[linkComic]] = urlComic;
    const urlLink = linkComic.props.children;

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
                            <button className="favourite__delete_button">
                                <img src={DeleteIcon} alt="delete" />
                            </button>
                            <Card.Title>
                                {name}</Card.Title>
                            <Card.Text className="character__text">
                                {`${info}...`}
                            </Card.Text>
                            {/* <button className="btn character__button"
                            >Add to Favourites</button> */}
                        </Card.Body>
                        <br />
                        <Card.Title className="character__title">Official source</Card.Title>
                        <Card.Text className=" character__text__item animate__animated animate__fadeInLeft">
                            <a href={urlLink} target="blank">
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