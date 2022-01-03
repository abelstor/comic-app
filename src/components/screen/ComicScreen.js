import { Col, Row } from 'react-bootstrap';

import { useCharacters } from '../../helpers/useCharacters';
import { CharacterModel } from '../characterModel/CharacterModel';
import { ComicPagination } from '../pagination/ComicPagination';
import Char from '../../assets/icons/characters.png';
import './screen.css';

export const ComicScreen = () => {

    const data = useCharacters();

    return (
        <div className="container">
            <h3 className='mt-3'>
                <img
                    className="screen__title"
                    src={Char} alt="char" />
                {' '}
                Characters</h3>
            <div>
                <Row xs={1} md={2} className="g-0">
                    {data.map((per) => [
                        <Col key={per.id}>
                            <CharacterModel
                                name={per.name}
                                description={per.description}
                                id={per.id}
                                image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                                items={per.comics.items.map((it) => (it.name))}
                            />
                        </Col>
                    ])}
                </Row>
            </div>
            <div className="screen__nextPage">
                <ComicPagination />
            </div>
        </div >
    )
}
