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
    const show = useSelector(state => state.showList.showList)
    
    console.log(natio)

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
        function showList () {
            dispatch(showListAction(show))
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
                <div className='randomuser-wraper'>
                    <table>
                        <tr className='sort-panel'> 
                            <div className='block-1'> 
                                <button onClick={bigPage}>12 on page</button>
                                <button onClick={mediumPage}>8  on page</button>
                                <button onClick={smallPage}>4  on page</button>
                            </div>
                            <div className='block-2'>
                                <button onClick={allSex}>all sex</button>
                                <button onClick={female}>women</button>
                                <button onClick={male}>men</button>
                            </div>
                            <div className='block-3'>   
                                <button onClick={showList} className='btn-sort-nation'>
                                    <SortByNationality/>
                                </button>
                            </div>
                        </tr>
                        <tr className='list-header'>
                                <th className='avatar-column'>User</th>
                                <th className='fullname-column'>Full name</th>
                                <th className='birthday-column'>Birthday</th>
                                <th className='contact-column'> Contacts</th>
                                <th className='location-column'>Location</th>
                                <th className='nation-column'>Nationality</th>
                        </tr>
                        <tr className='users-list'>
                            {user.map((user) => (<li className='user' key={user.login.uuid} >
                                <td className='avatar-column'>
                                    <img src={user.picture.medium} className='photo' alt=''/>
                                </td>
                                <td className='fullname-column'>
                                    <div className='double-row-box'>
                                        <span>{user.name.first}</span>
                                        <span>{user.name.last}</span>
                                    </div>
                                </td>
                                <td className='birthday-column'>
                                    <Birthday user={user}/>
                                </td>
                                <td className='contact-column'>
                                    <div className='double-row-box'>
                                        <span>{user.phone}</span>
                                        <span>{user.email}</span>
                                    </div>
                                </td>
                                <td className='location-column'> 
                                    <Location user={user}/> </td>
                                <td className='nation-column'> 
                                    <Nationality user={user}/> 
                                </td>
                            </li>))}
                        </tr> 
                    </table>
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
