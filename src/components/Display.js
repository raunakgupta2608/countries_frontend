import React from 'react';
import { useSelector } from 'react-redux';

import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function Display() {
    const selectedCountry = useSelector(state => state.selectedCountryReducer)
    const { name, continent, flag, rank } = selectedCountry;
    return (
        <>
        {
        Object.keys(selectedCountry).length !=0 ?  (
        <Card className='p-2 w-50 card bg-secondary'>
            <CardImg top width="100%" src={`./${flag}`} alt="Card image cap" />
            <CardBody>
                <CardText>Name : { name }</CardText>
                <CardText>Rank : { rank }</CardText>
                <CardText>Continent : { continent } </CardText>
            </CardBody>
        </Card>
        )
        : <h2>Please Select a Country</h2>
        }
        </>
    )
}

export default Display;
