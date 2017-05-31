
import { RECEIVE_PRODUCTS, SET_ACTIVE_FILTERS } from '../actions';

const defaultState = {
    filterTitle: 'Chuteiras HyperVenom:',
    activeFilters: [],
    filterList: {
        'high-top': {
            title: 'Cano Alto',
            id: 'high-top',
            condition: {
                "conditionName": 'high-top',
                "conditionValue": true,
            }
        },
        'low-top': {
            title: 'Cano Baixo',
            id: 'low-top',
            condition: {
                "conditionName": 'high-top',
                "conditionValue": false,
            }
        },
        'category-society': {
            title: 'Futebol Society',
            id: 'category-society',
            condition: {
                "conditionName": "category",
                "conditionValue": "society",
            }
        },
        'category-campo': {
            title: 'Futebol Campo',
            id: 'category-campo',
            condition: {
                "conditionName": "category",
                "conditionValue": "campo",
            }
        },
    }
};

export default function filter(state = defaultState, action) {
    switch (action.type) {
        case SET_ACTIVE_FILTERS:
            return Object.assign({}, state, {activeFilters: action.activeFilters});
        default:
            return state;
    }
}
