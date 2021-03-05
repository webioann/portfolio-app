import React from 'react';
import national from './national'
import '../STYLES/Randomuser.scss'

function Nationality(props) {

    const nation = props.user.nat;
    const result = national[nation]; 
        console.log(result)
        console.log(nation)
    return (
        <div className='nationality-wraper'>
            {result}
        </div>
    )
}

export default Nationality;