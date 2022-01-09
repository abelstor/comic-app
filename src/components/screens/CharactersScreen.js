import { Col, Row } from 'react-bootstrap';

import { defaultList } from '../../helpers/defaultList';
import { CharacterModel } from '../models/CharacterModel';
// import { useCharacters } from '../../helpers/useCharacters';
import CharIcon from '../../assets/icons/characters.png';
import './screens.css';

export const CharactersScreen = () => {

    // const data = useCharacters();

    return (
        <div className="container">
            <h3 className='mt-3'>
                <img
                    className="screen__title"
                    src={CharIcon} alt="char" />
                {' '}
                Characters</h3>
            <div>
                <Row xs={1} md={2} className="g-0">
                    {defaultList.map((per) => [
                        <Col key={per.id}>
                            <CharacterModel
                                {...per}
                            // id={per.id}
                            // name={per.name}
                            // description={per.description}
                            // image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                            // items={per.comics.items.map((it) => (it.name))}
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
