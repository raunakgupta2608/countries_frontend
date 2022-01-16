import { 
    GET_COUNTRIES,
    FETCH_COUNTRIES_REQUEST, 
    FETCH_COUNTRIES_SUCCESS, 
    FETCH_COUNTRIES_FAILURE,
} from '../countryTypes';

const initialState = {
    loading: false,
    countries: [],
    error: ''
}

const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_REQUEST : return {
            ...state,
            loading: true
        }
        case FETCH_COUNTRIES_SUCCESS : return {
            loading: false,
            countries: action.payload,
            error: ''
        }
        case FETCH_COUNTRIES_FAILURE : return {
            loading: false,
            countries: [],
            error: action.payload
        }
        case GET_COUNTRIES : return {
            ...state
        }
        default: return state
    }
};

export default countryReducer;