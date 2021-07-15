import React from 'react';
import national from './national'
import '../STYLES/Randomuser.scss'

function Nationality(props) {

    const nation = props.user.nat;
    const result = national[nation]; 
    
    return (
        <div className='col-1 nation'>
            {result}
        </div>
    )
}

export default Nationality;