import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composewithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import thunk from './middleware/thunk';

const reducers = combineReducers({
  data: reducer
});

const Store = () =>
  createStore(reducers, composewithDevTools(applyMiddleware(thunk)));

export default Store;
