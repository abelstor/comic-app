import { useState } from 'react';
import { Card, Col, Container, Image, Modal, Row } from 'react-bootstrap';

import { useStateValue } from '../../providers/StateProvider';
import closeIcon from '../../assets/icons/btn-close.png';
import btnShoppingIcon from '../../assets/icons/shopping-cart-primary.png';
import btnFavouritesIcon from '../../assets/icons/btn-favourites-primary.png';

import './ui.css';

const ModalBody = (props) => {

    return (

        <Container className="container">
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <button
                    onClick={props.onHide}
                    className="modal__close__button">
                    <img src={closeIcon} alt="delete" />
                </button>
                <Modal.Body className="show-grid">
                    <div className="character__content animate__animated animate__fadeIn">
                        <Card style={{ width: "28rem" }} className="character__card">
                            <Row xs={1} md={2} className="g-0">
                                <Col>
                                    <Image
                                        variant="top"
                                        src={props.image}
                                        alt="comic"
                                        className="character__image zoomImg"
                                    />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Card.Title>
                                            {props.name}</Card.Title>
                                        <Card.Text className="character__text">
                                            {props.info}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                            <Col className="character__text__item">
                            </Col>
                        </Card>
                    </div>
                </Modal.Body>
                <div className="button__content">
                    <button className="add__button"
                        onClick={props.addToFavourites}>
                        <img src={btnFavouritesIcon} alt="btn-favourites" />
                        {' '}
                        <strong>ADD TO FAVOURITES</strong>
                    </button>
                    <button className="shopping__button"
                        onClick={props.onHide}>
                        <img src={btnShoppingIcon} className="img__shopping" alt="btn-favourites" />
                        {' '}
                        <strong>BUY FOR $3.99</strong>
                    </button>
                </div>
            </Modal>
        </Container>
    )
}

export const ModalComic = ({ id, url, name, image, description }) => {

    const [modalShow, setModalShow] = useState(false);

    const [, dispatch] = useStateValue();

    const addToFavourites = () => {
        dispatch({
            type: 'ADD_TO_FAVOURITES',
            item: {
                id: id,
                url: url,
                name: name,
                image: image,
                description: description,
            }
        });
        setModalShow(false);
    }

    const info = (!description ? 'Description not provided' : description).slice(0, 200);

    return (
        <>
            <button className="btn add__modal mt-1" onClick={() => setModalShow(true)}>
                add to favourites
            </button>

            <ModalBody
                id={id}
                url={url}
                name={name}
                image={image}
                info={info}
                show={modalShow}
                onHide={() => setModalShow(false)}
                addToFavourites={() => addToFavourites()}
            />
        </>
    )
}