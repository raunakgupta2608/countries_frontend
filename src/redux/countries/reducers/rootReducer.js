import { combineReducers } from "redux";
import selectedCountryReducer from './selectedCountryReducer';
import countryReducer from "./countryReducer";

const rootReducers = combineReducers({
    countryReducer : countryReducer,
    selectedCountryReducer: selectedCountryReducer
});

export default rootReducers