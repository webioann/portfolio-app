import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {showMenuAction,closeMenuAction} from '../REDUX/Reducers/showMenuReducer'

import '../STYLES/Menu.scss'

function MobileMenu() {

    const dispatch = useDispatch();
    const showMenu = useSelector(state => state.showMenu.showMenu);

    useEffect(() => {
        console.log('U P  D A T A')
    }, [showMenu])

    const showMenuItem = () => {
        if(showMenu === 'nav-bar-none') {
            dispatch(showMenuAction(showMenu)); 
        }
        else{
            setTimeout(() => {
                dispatch(closeMenuAction(showMenu));
            }, 1000 )
        }
    }
    return (
        <div className='mobile-menu'>
            <div className='burger' onClick={showMenuItem} >
                <div></div> 
                <div></div> 
                <div></div> 
            </div>
            <ul className="row menu">
                <li><a href='/'>Resume</a></li>
                <li><a href='/randomuser'>Randomuser</a></li>
                <li><a href='/weather_app'>Weather App</a></li>
                <li><a href='/work_three'>Work 3</a></li>
            </ul>
        </div>
    )
}
export default MobileMenu;