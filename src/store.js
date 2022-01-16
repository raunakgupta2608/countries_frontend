import { applyMiddleware, createStore } from "redux";
import rootReducers from './redux/countries/reducers/rootReducer';
import thunk from "redux-thunk";

const store =  createStore(rootReducers, applyMiddleware(thunk)) 

export default store;
