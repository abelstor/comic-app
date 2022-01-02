import { Navbar, Container } from 'react-bootstrap';

import { SearchScreen } from '../search/SearchScreen';
import Logo from '../../assets/logo.png';
import './header.css';

export const Header = () => {

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                <div className="header__logo">
                    <img
                        className="header__logoImage"
                        src={Logo} alt="logo" />
                </div>
                <div className="header__search">
                    <SearchScreen />
                </div>
            </Container>
        </Navbar>
    )
}