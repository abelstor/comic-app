
const comics = JSON.parse(localStorage.getItem('comics'));
export const initialState = comics.length > 0 ? { basket: comics } : { basket: [] };

export const getBasketTotal = (basket) => {

    return (basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_FAVOURITES':

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