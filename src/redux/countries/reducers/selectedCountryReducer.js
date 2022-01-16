import { 
    FETCH_SELECTED_COUNTRY
} from '../countryTypes';

const initialState = { }


const selectedCountryReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SELECTED_COUNTRY : 
            if(action.payload != undefined)
                return { ...state, ...action.payload }
            else  
                return {};
        default: return state
    }
};

export default selectedCountryReducer;