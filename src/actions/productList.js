import axios from 'axios';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export function receiveProducts(items) {
    return {
        type: RECEIVE_PRODUCTS,
        items,
    };
}

export const SET_LOADER = 'SET_LOADER';
export function setLoader(status) {
    return {
        type: SET_LOADER,
        status,
    };
}

export function fetchProducts() {
    return (dispatch) => {
        dispatch(setLoader(true));
        axios.get('http://www.raphaelfabeni.com.br/rv/data.json')
            .then((response) => {
                dispatch(receiveProducts(response.data));
                dispatch(setLoader(false));
            })
            .catch((error) => {
                dispatch(setLoader(false));
                console.error(error);
            });
    };
}
