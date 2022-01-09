export const initialState = {

    basket: [
        // {
        //     id: '123',
        //     url: 'url',
        //     name: 'ChapulimColorado',
        //     description: 'description',
        //     image: 'http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2.jpg',
        // }
    ],
}

export const getBasketTotal = (basket) => {

    return (basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_FAVOURITES':
            // let baskeT = [];
            // baskeT = state.basket;
            // const { id } = action.item;
            // baskeT.forEach(obj => {
            //     if (obj.id === id) {
            //         console.log('el id ya existe');
            //         return;
            //     } else {
            //         return {
            //             ...state,
            //             basket: [...state.basket, action.item]
            //         }
            //     }
            // })
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_FAVOURITES':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove item (id: ${action.id}) as its not in the basket!`
                );
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;