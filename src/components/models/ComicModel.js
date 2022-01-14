import { Card, Row, Col } from 'react-bootstrap';

import { ModalComic } from '../ui/ModalComic';
import './models.css';

export const ComicModel = ({ id, url, name, image, description }) => {

    return (
        <div className="comic__content animate__animated animate__fadeInRight">
            <Card style={{ width: "16rem" }} className="comic__card">
                <Row>
                    <Col>
                        <Card.Img
                            variant="top"
                            src={image}
                            alt="comic"
                            className="mt-4" />
                        <ModalComic
                            id={id}
                            url={url}
                            name={name}
                            image={image}
                            description={description}
                        />
                        <Card.Body>
                            <Card.Text>
                                {name}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card >
        </div >
    )
}