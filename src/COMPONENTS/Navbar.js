import React from 'react'
import '../STYLES/Menu.scss'
// import MobileMenu from './MobileMenu';
// import DesktopMenu from './DesktopMenu';

function Navbar() {
    return (
        <div className='navbar'>
            <ul className="row menu">
                <li><a href='/'>Resume</a></li>
                <li><a href='/randomuser'>Randomuser</a></li>
                <li><a href='/weather_app'>Weather App</a></li>
                <li><a href='/work_three'>Work 3</a></li>
            </ul>
        </div>
    )
}
export default Navbar;