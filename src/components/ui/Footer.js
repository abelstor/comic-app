import { Navbar, Container } from 'react-bootstrap';

import './ui.css';

export const Footer = () => {

    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container className="justify-content-center">
                <div>
                    <p className="text__footer text-center mt-2 mb-2" style={{ color: "white" }}>
                        Todos los derechos reservados
                    </p>
                </div>
            </Container>
        </Navbar>
    )
}