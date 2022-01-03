import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

import { ComicScreen } from './components/screen/ComicScreen';
import { MyFavourites } from './components/favourites/MyFavourites';
import './comic.css';

export const ComicApp = () => {

    return (
        <>
            <div className="container-fluid">
                <Container fluid={true}>
                    <Row>
                        <Col sm={9}>
                            <ComicScreen />
                        </Col>
                        <Col sm={3}>
                            <MyFavourites />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}