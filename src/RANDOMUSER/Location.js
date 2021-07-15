import React from 'react'
import '../STYLES/Randomuser.scss'

function Location(props) {
    const user = props.user;

    return (
        <div className='col col-3 location'>
            <span>/{user.location.country}/</span>
            <span>{user.location.street.number},{user.location.street.name} street,</span>
            <span>{user.location.city},{user.location.state}.</span>
        </div>
    )
}
export default Location;