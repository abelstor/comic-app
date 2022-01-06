import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

import './models.css';

export const ComicModel = ({ image, name, id }) => {

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
                                <Link to={`/favourites/${id}`}>
                                    <button className="btn comic__button"
                                    >add to favourites</button>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    )
}