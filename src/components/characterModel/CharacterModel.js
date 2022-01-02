import { Card, Row, Col, Image } from 'react-bootstrap';
import './characterModel.css';

export const CharacterModel = ({ image, description, name }) => {

    const brief = description.slice(0, 120);

    // const [{ basket }, dispatch] = useStateValue();

    // const addToFavourites = () => {
    //     dispatch({
    //         type: 'ADD_TO_BASKET',
    //         item: {
    //             name: name,
    //             image: image,
    //             pricePound: pricePound,
    //             brief: brief
    //         },
    //     });
    // }

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
                            <button className="btn character__button"
                            // onClick={addToFavourites}
                            >VIEW MORE</button>
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Title className="character__title">Related comics</Card.Title>
                <Row xs={1} md={2} className="g-0">
                    <Col className="character__text__item">
                        <Card.Text >
                            *Text número 1
                            <br />
                            *Text número 2
                            <br />
                            *Text número 3
                        </Card.Text>
                    </Col>
                    <Col className="character__text__item">
                        <Card.Text >
                            *Text número 1
                            <br />
                            *Text número 2
                            <br />
                            *Text número 3
                        </Card.Text>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}