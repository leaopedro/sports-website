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


const rootReducer = combineReducers({
    productList
});

export default rootReducer;
