import { Col, Row } from 'react-bootstrap';

import { CharacterModel } from '../models/CharacterModel';
import { defaultList } from '../../helpers/defaultList';
import CharIcon from '../../assets/icons/characters.png';
import './screens.css';

export const CharactersScreen = () => {

    return (
        <div className="container">
            <h2 className='mt-3'>
                <img
                    className="screen__title"
                    src={CharIcon} alt="char" style={{ width: "55px" }} />
                {' '}
                Characters</h2>
            <div>
                <Row xs={1} md={2} className="g-0">
                    {defaultList.map((per) => [
                        <Col key={per.id}>
                            <CharacterModel
                                {...per}
                            />
                        </Col>
                    ])}
                </Row>
            </div>
            <div className="screen__nextPage">
            </div>
        </div >
    )
}
