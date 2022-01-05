import { Link } from 'react-router-dom';
import { Card, Row, Col, Image } from 'react-bootstrap';

import './models.css';

export const ComicModel = ({ image, description, name, id, url }) => {

    // const brief = description.slice(0, 120);
    // const newItems = items.splice(0, 4);

    return (
        <div className="character__content animate__animated animate__fadeIn">
            <Card style={{ width: "28rem" }} className="character__card">
                <Row xs={1} md={2} className="g-0">
                    <Col>
                        <Image
                            variant="top"
                            src={image}
                            alt="comic"
                            className="character__image" />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text className="character__text">
                                {/* {`${brief}...`} */}
                            </Card.Text>
                            <Link to={`list-comic/${id}`}>
                                <button className="btn character__button"
                                >Add to Favorites</button>
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Title className="character__title">Source</Card.Title>
                <Col className="character__text__item">
                    <Card.Text >
                        {/* <Link>
                            {url}
                        </Link> */}
                        <br />
                    </Card.Text>
                </Col>
            </Card>
        </div>
    )
}