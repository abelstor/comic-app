import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

import DeleteIcon from '../../assets/icons/btn-delete.png';
import './models.css';

export const ComicListModel = ({ image, description, id }) => {

    return (
        <div className="comic__content animate__animated animate__fadeInRight">
            <Card style={{ width: "16rem" }} className="comic__card">
                <div className="margen">
                    <Row>
                        <Col>
                            <button className="comic__delete_button">
                                <img src={DeleteIcon} alt="delete" />
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
                                <Link to={`list-comic/${id}`}>
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