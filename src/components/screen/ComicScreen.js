import { Col, Row } from 'react-bootstrap';

import { useApi } from '../../api/apiMarvel';
import { CharacterModel } from '../characterModel/CharacterModel';
import Char from '../../assets/icons/characters.png';
import './screen.css';

export const ComicScreen = () => {

    const data = useApi('characters');

    return (
        <div>
            <h3 className='mt-3'>
                <img
                    className="screen__title"
                    src={Char} alt="char" />
                {' '}
                Characters</h3>
            <div>
                <Row xs={1} md={2} className="g-0">
                    {data.map((per) => [
                        <Col key={per}>
                            <CharacterModel
                                name={per.name}
                                description={per.description}
                                pricePound={per.pricePound}
                                image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                            />
                        </Col>
                    ])}
                </Row>
            </div>
        </div >
    )
}
