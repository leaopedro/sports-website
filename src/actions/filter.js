import Config from './../config'
import axios from 'axios';

import { receiveProducts } from './index';

export const SET_ACTIVE_FILTERS = 'SET_ACTIVE_FILTERS';
export function setActiveFilters(activeFilters) {
    return {
        type: SET_ACTIVE_FILTERS,
        activeFilters,
    };
}

export function toggleFilter(val, filter) {
    return (dispatch, getState) => {
        const activeFilters = getState().filter.activeFilters;
        console.log(activeFilters);
        if (activeFilters.indexOf(filter.id) !== -1) {
            activeFilters.splice(activeFilters.indexOf(filter.id), 1);
        } else {
            activeFilters.push(filter.id);
        }
        console.log(activeFilters);
        dispatch(setActiveFilters(activeFilters));
        dispatch(refreshItems());
    };
}

export function refreshItems() {
    return (dispatch, getState) => {
        const state = Object.assign({}, getState());
        const items = state.productList.defaultItems;
        const newItems = {};

        if (state.filter.activeFilters.length === 0) {
            dispatch(receiveProducts(items));
            return;
        }

        for (let item in items) {
            if (items.hasOwnProperty(item)) {
                newItems[item] = [];
                const array = items[item];
                newItems[item] = array.filter((el) => {
                    for(let i= 0; i < state.filter.activeFilters.length; i++) {
                        const currentFilter = state.filter.activeFilters[i];
                        if (el[state.filter.filterList[currentFilter].condition.conditionName] === state.filter.filterList[currentFilter].condition.conditionValue) {
                            return el;
                        }
                    }
                });
            }
        }
        dispatch(receiveProducts(newItems));
    };
}
