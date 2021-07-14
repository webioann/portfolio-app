import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {femaleAction,maleAction,allSexAction} from '../REDUX/Reducers/genderReducer'
import {bigPageAction,mediumPageAction,smallPageAction} from '../REDUX/Reducers/pageSizeReducer'
import {showListAction} from '../REDUX/Reducers/showListReducer'
import SortByNationality from './SortByNationality'
import Nationality from './Nationality'
import Birthday from './Birthday'
import Location from './Location'

import '../STYLES/Randomuser.scss'

function SortRoom() {

    const dispatch = useDispatch()
    const gender = useSelector(state => state.gender.gender)
    const pageSize = useSelector(state => state.pageSize.pageSize)
    const natio = useSelector(state => state.natio.natio)
    // const show = useSelector(state => state.showList.showList)

    return (
        <div>
            
        </div>
    )
}
export default SortRoom;