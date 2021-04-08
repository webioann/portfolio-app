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

function Randomuser() {
    const dispatch = useDispatch()
    const gender = useSelector(state => state.gender.gender)
    const pageSize = useSelector(state => state.pageSize.pageSize)
    const natio = useSelector(state => state.natio.natio)
    // const show = useSelector(state => state.showList.showList)
    
   
    const[isLoad,setisLoad] = useState(true);
    const[isError,setisError] = useState(false);
    const[data,setData] = useState([]);

        const female = () => {
            dispatch(femaleAction(gender));
        }
        const male = () => {
            dispatch(maleAction(gender))    
        }
        const allSex = () => {
            dispatch(allSexAction(gender))
        }

        const bigPage = () => {
            dispatch(bigPageAction(pageSize));
        }
        const mediumPage = () => {
            dispatch(mediumPageAction(pageSize))    
        }
        const smallPage = () => {
            dispatch(smallPageAction(pageSize))
        }

    const useContacts = () => {
        useEffect(() => {
                const getContacts = async () => {
                    try {
                        let URL = `https://randomuser.me/api/?page=1&results=${pageSize}&nat=${natio}&gender=${gender}`;
                        const response = await fetch(URL)
                        const {results,error} = await response.json();
                        if (error) {
                            throw new Error(error);
                        }
                        setData(results);
                        setisError(false);
                    }
                    catch (error) { setisError(true); console.log('ERROR') }
                    finally {setisLoad(false);}
                }
                getContacts();
            }
        ,[gender,pageSize,natio]);
        return {data, isLoad, isError }
    }
        
    const contacts = useContacts();
    const user = contacts.data;

    if (!contacts.isLoad && !contacts.isError){

    return (
        <div className='container randomuser-wraper'>
                <div className='row sort-panel'> 
                    <div className='block-1'> 
                        <div className="button" onClick={bigPage}>10 on page</div>
                        <div className="button" onClick={mediumPage}>
                            8  on page
                        </div>
                        <div className="button" onClick={smallPage}>4  on page</div>
                    </div>
                    <div className='block-2'>
                        <div className="button" onClick={allSex}>all sex</div>
                        <div className="button" onClick={female}>women</div>
                        <div className="button" onClick={male}>men</div>
                    </div>
                            <SortByNationality/>
                </div>


            <div className='col list-wraper'>
                <div className='col users-list'>
                    {user.map((user) => (<li className='row user' key={user.login.uuid} >
                        <div className="row col-3 first">
                                <img src={user.picture.medium} className='col photo' alt=''/>
                            <div className='col fullname'>
                                <p>{user.name.first} {user.name.last}</p>
                                <Birthday user={user}/>
                            </div>
                        </div>

                        <div className='col-4 col contact'>
                                <p>Phone:  {user.phone}</p>
                                <p>{user.email}</p>
                        </div>

                        <div className='col-3 col location'> 
                            <Location user={user}/>
                        </div>

                        <div className='col-2 nation'> 
                            <Nationality user={user}/> 
                        </div>

                    </li>))}
                </div> 
            </div>
        </div>

    )
    }else if (contacts.isLoad) {
        return (
           <h1>...LOADING ...</h1>
        )
    } else if (contacts.isError) {
        return (
            <h1>...ERROR ...</h1>
        )
    }
}    
export default Randomuser;






