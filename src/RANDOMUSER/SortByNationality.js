import React,{useState} from 'react'
import nationality from './national'
import {useDispatch,useSelector} from "react-redux";
import {chooseNatioAction} from '../REDUX/Reducers/natioReducer'
import '../STYLES/Randomuser.scss'

function SortByNationality() {
    const[display,setDisplay] = useState(false);

    const dispatch = useDispatch();

    let nationalityList = [];
    let nationalityCode = [];
    for(let key in nationality) {
        nationalityList.push(nationality[key]);
        nationalityCode.push(key)
    }
    
    function showList () {
        setTimeout(() => {
            setDisplay(!display);
            
        }
           ,500
        );
    }
    function choose (event) {
        dispatch(chooseNatioAction(event.target.type));
        setTimeout(() => {
            setDisplay(false);
        }
           ,500
        );
    }
     if(display) {
        return (
            <div className='row sort-by-nationality' onClick={showList}>
                nationality
                <div className='col glas-list' >
                    {nationalityCode.map((code,key) =>(<li 
                     onClick={choose} key={key} type={code} >
                          {nationalityList[key]} </li>))}
                </div>
            </div>
        )
    }else{
        return (
            <div className='row sort-by-nationality' onClick={showList}>
                nationality
            </div>
        )
    }
}
export default SortByNationality;