import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

import { SearchBarUi } from './SearchBarUi';
import LogoIcon from '../../assets/logo.png';
import './ui.css';

export const HeaderUi = () => {

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                <div className="header__logo">
                    <Link to={'/'}>
                        <img
                            className="header__logoImage"
                            src={LogoIcon} alt="logo" />
                    </Link>
                </div>
                <div className="header__search">
                    <SearchBarUi />
                </div>
            </Container>
        </Navbar>
    )
}