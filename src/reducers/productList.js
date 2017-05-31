
import { RECEIVE_PRODUCTS } from '../actions';

const defaultState = {
    items: {},

};

export default function productList(state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, {items: action.items});
        default:
            return state;
    }
}
