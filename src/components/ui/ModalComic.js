import { useEffect, useState } from 'react';
import { Card, Col, Image, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useStateValue } from '../../providers/StateProvider';
import { useLocalStorage } from '../../providers/useLocalStorage';
import closeIcon from '../../assets/icons/btn-close.png';
import btnShoppingIcon from '../../assets/icons/shopping-cart-primary.png';
import btnFavouritesIcon from '../../assets/icons/btn-favourites-primary.png';

import './ui.css';

const ModalBody = ({ addToFavourites, buyComic, ...props }) => {

    return (

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
                                        {`${props.info}...`}
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
                    onClick={addToFavourites}>
                    <img src={btnFavouritesIcon} alt="btn-favourites" />
                    {' '}
                    <strong>ADD TO FAVOURITES</strong>
                </button>
                <button className="shopping__button"
                    onClick={buyComic}>
                    <img src={btnShoppingIcon} className="img__shopping" alt="btn-favourites" />
                    {' '}
                    <strong>BUY FOR $3.99</strong>
                </button>
            </div>
        </Modal>
    )
}

export const ModalComic = ({ id, url, name, image, description }) => {

    const MySwal = withReactContent(Swal);

    const [modalShow, setModalShow] = useState(false);

    const [{ basket }, dispatch] = useStateValue();

    const [storage, setStorage] = useLocalStorage('comics', basket);

    const addToFavourites = () => {

        const index = basket.findIndex(
            (basketItem) => basketItem.id === id
        );

        if (index >= 0) {

            setModalShow(false);
            MySwal.fire({
                icon: 'error',
                title: <p>Comic already added!</p>,
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }

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

        MySwal.fire({
            icon: 'success',
            title: <p>Added successfully!</p>,
            showConfirmButton: false,
            timer: 1000
        })
        setModalShow(false);
    }

    const buyComic = () => {
        MySwal.fire({
            icon: 'info',
            title: <p>Oops! We're sorry</p>,
            text: 'Coming soon!',
            showConfirmButton: false,
            timer: 1500
        })
        setModalShow(false);
    }

    useEffect(() => {
        setStorage(basket);
    }, [basket, dispatch, storage, setStorage])


    return (
        <>
            <button className="btn add__modal mt-1" onClick={() => setModalShow(true)}>
                add to favourites
            </button>

            <ModalBody
                id={id}
                name={name}
                image={image}
                info={description}
                show={modalShow}
                onHide={() => setModalShow(false)}
                addToFavourites={() => addToFavourites()}
                buyComic={() => buyComic()}
            />
        </>
    )
}