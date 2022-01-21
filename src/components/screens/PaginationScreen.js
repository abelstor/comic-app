import { Pagination } from 'react-bootstrap';

export const PaginationScreen = ({ nextPage, prevPage, data, filterData }) => {

    const page = () => {
        if ((data % filterData) !== 0) {
            return data / filterData + 1;
        } else {
            return data / filterData;
        }
    }
    console.log(page());

    let active = 1;
    let items = [];
    for (let number = 1; number <= page().length; number++) {
        items.push(
            <Pagination.Item
                key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (

        <div className="pagination justify-content-center">
            <button className="btn__content__page" onClick={prevPage}>
                {/* <img src={ArrowLeft} alt="ArrowLeft" className="btn__arrow mb-3" /> */}
            </button>
            <div className="pagination__button">
                <Pagination size="md" className="">{items}</Pagination>
            </div>
            <button className="btn__content__page" onClick={nextPage}>
                {/* <img src={ArrowRight} alt="ArrowRight" className="btn__arrow mb-3" /> */}
            </button>
        </div>
    )
}