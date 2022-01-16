import axios from 'axios';
import { 
    GET_COUNTRIES,
    FETCH_COUNTRIES_REQUEST, 
    FETCH_COUNTRIES_SUCCESS, 
    FETCH_COUNTRIES_FAILURE,
    FETCH_SELECTED_COUNTRY,
    POST_COUNTRY
} from './countryTypes';

export const fetchCountriesRequest = () => {
    return {
        type: FETCH_COUNTRIES_REQUEST
    }
}

export const fetchCountriesSuccess = (countries) => {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}
export const fetchCountriesFailure = (error) => {
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}

export const selectedCountry = (country) => {
    return {
        type: FETCH_SELECTED_COUNTRY,
        payload: country
    }
}

export const getCountries = () => {
    return {
        type: GET_COUNTRIES
    }
}

export const fetchCountries = () => {
    return (dispatch) => {
        dispatch(fetchCountriesRequest)

        axios.get('http://localhost:8080/countries')
        .then((response) => {
            const countries = response.data
            dispatch(fetchCountriesSuccess(countries))
        })
        .catch((error) => {
            const errorMsg = error.message
            console.log(errorMsg)
            dispatch(fetchCountriesFailure(errorMsg))
        })
    }
}

export const postCountry = (postObject) => {
    const { nameOfCountry, nameOfContinent, flag, rank } = postObject;
    return (dispatch) => {

        axios.post('http://localhost:8080/countries', postObject)
        .then((response) => {
            console.log(response)
            if(response.status == 200){
                const countries = response.data
                dispatch(fetchCountriesSuccess(countries))
                const obj = {
                    "name": nameOfCountry,
                    "continent": nameOfContinent,
                    "flag": flag,
                    "rank": +rank
                }
                dispatch(selectedCountry(obj))
            }
        })
        .catch((error) => {
            alert('Please enter unique data')
            console.log(error)
        })
    }
}