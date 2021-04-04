import React from 'react'
import '../STYLES/Randomuser.scss'

function Location(props) {
    const data = props.user;

    return (
        <>
            <p>City:{data.location.city}</p>
            <p>State:{data.location.state}</p>
        </>
    )
}
export default Location;