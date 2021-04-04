import React from 'react';
import national from './national'
import '../STYLES/Randomuser.scss'

function Nationality(props) {

    const nation = props.user.nat;
    const result = national[nation]; 
    return (
        <p className='right-text'>
            {result}
        </p>
    )
}

export default Nationality;