import { Col, Container, Row } from 'react-bootstrap';

import { CharactersScreen } from './CharactersScreen';
import { ListFavouritesScreen } from './ListFavouritesScreen';

export const HomeScreen = () => {

    return (
        <>
            <div className="container-fluid home__background">
                <Container fluid={true}>
                    <Row>
                        <Col sm={9}>
                            <CharactersScreen />
                        </Col>
                        <Col sm={3}>
                            <ListFavouritesScreen />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}