import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { CharacterModel } from '../models/CharacterModel';
import { useFetchByName } from '../../helpers/useFetchByName';
import { Loading } from '../ui/Loading';
import CharIcon from '../../assets/icons/characters.png';
import ArrowLeft from '../../assets/icons/btn_arrow_left.png';
import ArrowRight from '../../assets/icons/btn_arrow_right.png';
import './screens.css';

export const SearchScreen = () => {

    const { data, loading } = useFetchByName();

    const [currentPage, setCurrentPage] = useState(0);

    const filterData = () => {
        return data.slice(currentPage, currentPage + 10);
    }

    const nextPage = () => {
        if (filterData().length < 10) {
            return;
        } else {
            setCurrentPage(currentPage + 10);
        }
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 10);
    }

    const buttonLeft =
        <button className="btn__content__page" onClick={prevPage}>
            <img src={ArrowLeft} alt="ArrowLeft" className="btn__arrow mb-3" />
        </button>

    const buttonRight =
        <button className="btn__content__page" onClick={nextPage}>
            <img src={ArrowRight} alt="ArrowRight" className="btn__arrow mb-3" />
        </button>

    if (data.length > 0) {

        return (loading ? <Loading /> :
            <div className="container animate__animated animate__fadeInLeft">
                <Link to={'/'} className="text__link">
                    <h3 className="mt-3 text-center">
                        <img src={CharIcon} alt="char" />
                        {' '}
                        Characters
                    </h3>
                </Link>
                <div>
                    <Row xs={1} md={2} className="g-0">
                        {filterData().map((per) => [
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
                <div className="pagination justify-content-center">
                    {
                        (currentPage === 0) ? buttonRight : <div>{buttonLeft} &nbsp; {buttonRight}</div>
                    }
                </div>
            </div >
        )
    } else {

        return (loading ? <Loading /> :
            <div className="container animate__animated animate__fadeInLeft p-5">
                <h3>No matches found...</h3>
            </div>
        )
    }
}