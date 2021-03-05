import React from 'react'
import '../STYLES/Randomuser.scss'

function Location(props) {
    const data = props.user;

    return (
        <div className='location-wraper'>
            <div> <span className='other-text'>City : </span>{data.location.city}</div>
            <div> <span className='other-text'>State : </span>{data.location.state}</div>
        </div>
    )
}
export default Location;