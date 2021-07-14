import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {showMenuAction,closeMenuAction} from '../REDUX/Reducers/showMenuReducer'
import '../STYLES/App.scss';

function Burger() {
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
        <div className='burger' onClick={showMenuItem} >
           <div></div> 
           <div></div> 
           <div></div> 
        </div>
    )
}
export default Burger;