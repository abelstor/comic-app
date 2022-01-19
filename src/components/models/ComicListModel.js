import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useStateValue } from '../../providers/StateProvider';
import { useLocalStorage } from '../../providers/useLocalStorage';
import DeleteIcon from '../../assets/icons/btn-delete.png';
import './models.css';

export const ComicListModel = ({ id, name, image }) => {

    const MySwal = withReactContent(Swal);

    const [{ basket }, dispatch] = useStateValue();

    const [storage, setStorage] = useLocalStorage('comics', []);

    const removeFavourite = () => {

        dispatch({
            type: 'REMOVE_FROM_FAVOURITES',
            id: id
        });
        MySwal.fire({
            width: '20rem',
            position: 'center-end',
            icon: 'warning',
            title: <p>Deleted!</p>,
            showConfirmButton: false,
            timer: 1000
        })
    }

    useEffect(() => {
        setStorage(basket);
    }, [basket, storage, setStorage])

    return (
        <div className="comic__content animate__animated animate__fadeInRight">
            <Card style={{ width: "16rem" }} className="comic__card">
                <Row>
                    <Col>
                        <button onClick={removeFavourite}
                            className="comic__delete__button">
                            <img src={DeleteIcon} alt="delete" />
                        </button>
                        <Link to="/favourites">
                            <Card.Img
                                variant="top"
                                src={image}
                                alt="comic"
                                className="mt-4" />
                        </Link>
                        <Card.Body>
                            <Card.Text>
                                {name}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}