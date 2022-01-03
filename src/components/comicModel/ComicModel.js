import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

import Delete from '../../assets/icons/btn-delete.png';
import './comicModel.css';

export const ComicModel = ({ image, description, id }) => {

    return (
        <div className="comic__content">
            <Card style={{ width: "16rem" }} className="comic__card">
                <div className="margen">
                    <Row>
                        <Col>
                            <button className="comic__delete_button">
                                <img src={Delete} alt="delete" />
                            </button>
                            <Card.Img
                                variant="top"
                                src={image}
                                alt="comic"
                                className="mt-4" />
                            <Card.Body>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Link to={`/comic-list/${id}`}>
                                    <button className="btn comic__button"
                                    >VIEW MORE</button>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    )
}