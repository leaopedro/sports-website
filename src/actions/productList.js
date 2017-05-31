import Config from './../config'
import axios from 'axios';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export function receiveProducts(items, setDefault) {
    const st = {
        type: RECEIVE_PRODUCTS,
        items,
    };
    if (setDefault) {
        st.defaultItems = items;
    }
    return st;
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
        axios.get(`${Config.productsApiUrl}/bins/17p5d5`)
            .then((response) => {
                dispatch(receiveProducts(response.data, true));
                dispatch(setLoader(false));
            })
            .catch((error) => {
                dispatch(setLoader(false));
                console.error(error);
            });
    };
}
