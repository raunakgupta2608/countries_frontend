import React, { useEffect, useState } from 'react';
import * as actionTypes from '../redux/index';
import { useSelector, useDispatch } from 'react-redux';

function PostCountry() {

    const [formData, setFormData] = useState({
        nameOfCountry: '',
        nameOfContinent: '',
        flag: '',
        rank: ''
    })
    var tempImg;
    const name = useSelector(state => state.countryReducer.countries)
    const dispatch = useDispatch()

    function handleInput(e) {
        const name = e.target.id
        const value = e.target.value

        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(validateName() && validateImage()) {
            const postObject = {...formData, flag: tempImg}
            tempImg = '';
            dispatch(actionTypes.postCountry(postObject));
            setFormData({
                nameOfCountry: '',
                nameOfContinent: 'none',
                flag: '',
                rank: ''
            })
        }
    }

    function validateName() {
        if(formData.nameOfCountry.length<2 || formData.nameOfCountry.length>20) {
            alert('Please input proper name')
            setFormData({...formData, nameOfCountry: ''})
            return false
        }
        return true
    }

    function validateImage () {
        const img = document.forms['postCountry']['flag'];
        const validExt = ['jpg', 'png'];
        if(img.value != '') {
            const imgExt = img.value.substring(img.value.lastIndexOf('.') + 1).toLowerCase()
            if(validExt.includes(imgExt)) {
                if(parseFloat(img.files[0].size/(1024*1024)) > 4 ) {
                    alert("File Size cannot be greater than 4 MB")
                }
                else {
                    tempImg = "images/" + img.value.substring(img.value.lastIndexOf('\\') + 1)
                    return true
                }
            }
            else {
                alert('Please input proper File')
                return false
            }
        }
        alert("Please Upload an image")
        return false
    }

    const continents = [... new Set(name.map((country, index) => {
        return country.continent
    }))]
    return (
        <>
            <div className='m-5 bg-warning'>
                <form action='' name='postCountry' onSubmit={handleSubmit}>
                    <div className="form-group pl-5 pr-5 pt-5">
                        <label htmlFor="nameOfCountry">Name</label>
                        <input type="text" className="form-control" id="nameOfCountry" 
                            value={formData.nameOfCountry} onChange={handleInput}
                        />
                    </div>
                    <div className="form-group pl-5 pr-5">
                        <label htmlFor="nameOfContinent">Continent</label>
                        <select className="form-control" id="nameOfContinent"
                            onChange={handleInput} value={formData.nameOfContinent}>
                        <option value="none">-------------</option>
                        {
                            continents.map((continent, index) => {
                                return (
                                    <option value={continent} key={index}>
                                        {continent}
                                    </option>
                                )
                            })
                        }
                        </select>
                    </div>
                    <div className="form-group pl-5 pr-5">
                        <label htmlFor="flag">Flag</label>
                        <input type="file" className="form-control" name='flag' id="flag" accept="image/x-png,image/jpeg"
                        value={formData.flag} onChange={handleInput}/>
                    </div>
                    <div className="form-group pl-5 pr-5">
                        <label htmlFor="rank">Rank</label>
                        <input type="number" className="form-control" id="rank" 
                            value={formData.rank} onChange={handleInput}
                        />
                    </div>
                    <div className="form-group pl-5 pr-5 pb-5">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostCountry;