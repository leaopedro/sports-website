/*

{
  addSubredditForm
  subreddits,
  selectedSubreddit,
  postsBySubreddit
}
*/

import { combineReducers } from 'redux';
import productList from './productList';
import filter from './filter';


const rootReducer = combineReducers({
    productList,
    filter
});

export default rootReducer;
