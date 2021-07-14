import React from 'react'
import '../STYLES/Menu.scss'

function FullMenu() {
    return (
        <div className='desktop-menu'>
            <ul className="row menu">
                <li><a href='/'>Resume</a></li>
                <li><a href='/randomuser'>Randomuser</a></li>
                <li><a href='/weather_app'>Weather App</a></li>
                <li><a href='/work_three'>Work 3</a></li>
            </ul>
        </div>
    )
}
export default FullMenu;