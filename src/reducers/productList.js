
import { RECEIVE_PRODUCTS } from '../actions';

const defaultState = {
    items: {},
    defaultItems: {},
};

export default function productList(state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            const newSt = Object.assign({}, state, {items: action.items});
            if (action.defaultItems) {
                newSt.defaultItems = action.defaultItems;
            }
            return newSt;
        default:
            return state;
    }
}
