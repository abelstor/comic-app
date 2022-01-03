import { Link } from 'react-router-dom';
import { Card, Row, Col, Image } from 'react-bootstrap';

import './characterModel.css';

export const CharacterModel = ({ image, description, name, id, items }) => {

    const brief = description.slice(0, 120);
    const newItems = items.splice(0, 4);

    return (
        <div className="character__content">
            <Card style={{ width: "28rem" }} className="character__card">
                <Row xs={1} md={2} className="g-0">
                    <Col>
                        <Image
                            roundedCircle
                            variant="top"
                            src={image}
                            alt="comic"
                            className="character__image" />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text className="character__text">
                                {`${brief}...`}
                            </Card.Text>
                            <Link to={`/comic-list/${id}`}>
                                <button className="btn character__button"
                                >VIEW MORE</button>
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Title className="character__title">Related comics</Card.Title>
                <Col className="character__text__item">
                    <Card.Text >
                        {newItems.map(ite => [
                            <li key={ite}>
                                {ite}
                            </li>
                        ])}
                        <br />
                    </Card.Text>
                </Col>
            </Card>
        </div>
    )
}