import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


import { ComicModel } from '../models/ComicModel';
import { useFetchById } from '../../helpers/useFetchById';
import { Loading } from '../ui/Loading';
import CharIcon from '../../assets/icons/characters.png';
import ArrowLeft from '../../assets/icons/btn_arrow_left.png';
import ArrowRight from '../../assets/icons/btn_arrow_right.png';

export const ComicsScreen = () => {

    const { id } = useParams();
    const { data, loading } = useFetchById(id);
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

    if (loading) {

        return <Loading />

    } else {

        return (

            <div className="container" style={{ marginBottom: 50 }}>
                <h3 className="mt-3 text-center">
                    <img
                        className="screen__title"
                        src={CharIcon} alt="char" />
                    {' '}
                    Related comics</h3>
                <div>
                    <Row xs={1} md={2} lg={3} className="g-0">
                        {filterData().map((per) => [
                            <Col key={per.id}>
                                <ComicModel
                                    id={per.id}
                                    name={per.title}
                                    description={per.description}
                                    image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                                    url={per.urls.map((it) => [
                                        <span key={it.id}>
                                            {it.url}
                                        </span>
                                    ])}
                                />
                            </Col>
                        ])}
                    </Row>
                    <div className="pagination justify-content-center" fixed="bottom">
                        {
                            (currentPage === 0) ? buttonRight : <div>{buttonLeft} &nbsp; {buttonRight}</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}