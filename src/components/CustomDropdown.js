import React, { useEffect } from 'react';
import * as actionTypes from '../redux/index';
import { useSelector, useDispatch } from 'react-redux';
import PostCountry from './PostCountry';

function CustomDropdown() {
    const name = useSelector(state => state.countryReducer.countries)
    const selectedCountry = useSelector(state => state.selectedCountryReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionTypes.fetchCountries());
    },[])

    function handleClick(e) {
        e.preventDefault()
        const temp = name.filter((country) => {
            return country.name == e.target.value
        })
        dispatch(actionTypes.selectedCountry(temp[0]));
    }

    return (
        <>
        <select name="cars" id="cars" onChange={(e) =>{ handleClick(e)}} value={selectedCountry}>
        <option value="none">-------------</option>
        {
            name.map((country, index) => {
                return (
                    <option value={country.name} key={index}>
                        {country.name}
                    </option>
                )
            })
        }
        </select>
        <PostCountry />
        </>
    )
}

export default CustomDropdown;