import Config from './../config'
import axios from 'axios';

import {receiveProducts} from './index';

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
    if (activeFilters.indexOf(filter.id) !== -1) {
      activeFilters.splice(activeFilters.indexOf(filter.id), 1);
    } else {
      activeFilters.push(filter.id);
    }
    dispatch(setActiveFilters(activeFilters));
    dispatch(refreshItems());
  };
}

export function refreshItems() {
  // \/ Odiei essa abordagem, mas foi a única que consegui resolver o bug do filtro
  return (dispatch, getState) => {
    const state = Object.assign({}, getState());
    const items = state.productList.defaultItems;
    const newItems = {};

    const indexHighTop = state.filter.activeFilters.indexOf('high-top');
    const indexLowTop = state.filter.activeFilters.indexOf('low-top');
    const indexCatSociety = state.filter.activeFilters.indexOf('category-society');
    const indexCatCampo = state.filter.activeFilters.indexOf('category-campo');

    if (state.filter.activeFilters.length === 0 || state.filter.activeFilters.length === 4) {
      dispatch(receiveProducts(items));
      return;
    }
    if (state.filter.activeFilters.length === 2) {
      if ((indexHighTop !== -1 && indexLowTop !== -1) || (indexCatSociety !== -1 && indexCatCampo !== -1)) {
        dispatch(receiveProducts(items));
        return;
      }
    }

    // TODO REVIEW \/ - fazer de forma genérica (número de filtros escalável)
    const productIsValid = (product) => {
      if (state.filter.activeFilters.length === 1) {
        return (product[state.filter.filterList[state.filter.activeFilters[0]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[0]].condition.conditionValue);
      }
      if (state.filter.activeFilters.length === 2) {
        const a = (indexHighTop !== -1) ? indexHighTop : indexLowTop;
        const b = (indexCatSociety !== -1) ? indexCatSociety : indexCatCampo;
        return (
          (product[state.filter.filterList[state.filter.activeFilters[a]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[a]].condition.conditionValue)
          &&
          (product[state.filter.filterList[state.filter.activeFilters[b]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[b]].condition.conditionValue)
        );
      }
      //tem 3 filtros ativos
      if (indexHighTop !== -1 && indexLowTop !== -1) { //tanto faz high ou low
        if (indexCatSociety !== -1) {
          return (product[state.filter.filterList[state.filter.activeFilters[indexCatSociety]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[indexCatSociety]].condition.conditionValue);
        }
        if (indexCatCampo !== -1) {
          return (product[state.filter.filterList[state.filter.activeFilters[indexCatCampo]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[indexCatCampo]].condition.conditionValue);
        }
      } else { // ou high ou low  -  society e campo
        const i = (indexHighTop !== -1) ? indexHighTop : indexLowTop;
        return (product[state.filter.filterList[state.filter.activeFilters[i]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[i]].condition.conditionValue);
      }

      if (indexCatSociety !== -1 && indexCatCampo !== -1) { // tanto faz society ou campo
        if (indexHighTop !== -1) { // só high-top
          return (product[state.filter.filterList[state.filter.activeFilters[indexHighTop]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[indexHighTop]].condition.conditionValue);
        }
        if (indexLowTop !== -1) { // só low-top
          return (product[state.filter.filterList[state.filter.activeFilters[indexLowTop]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[indexLowTop]].condition.conditionValue);
        }
      } else { // ou society ou campo - high e low
        const i = (indexCatSociety !== -1) ? indexCatSociety : indexCatCampo;
        return (product[state.filter.filterList[state.filter.activeFilters[i]].condition.conditionName] === state.filter.filterList[state.filter.activeFilters[i]].condition.conditionValue);
      }
      console.error(product);
      return false;
    }

    for (let item in items) {
      if (items.hasOwnProperty(item)) {
        newItems[item] = [];
        const array = items[item];
        newItems[item] = array.filter((el) => {
          if (productIsValid(el)) {
            return el;
          }
        });
      }
    }
    dispatch(receiveProducts(newItems));
  };
}
