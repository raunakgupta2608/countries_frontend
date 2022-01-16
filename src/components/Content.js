import React from 'react';
import Display from './Display';
import CustomDropdown from './CustomDropdown';

function Content() {
    return (
        <>
            <div className='content_div bg-info'>
                <div className='dropDown_div'>
                    <h2>Dropdown</h2>
                    <CustomDropdown/>
                </div>
                <div className='form_div'>
                    <Display />
                </div>
            </div>
        </>
    )
}

export default Content;