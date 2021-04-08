import React,{useEffect} from 'react'
import {useSelector} from "react-redux";
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Skills from './Skills'
import Randomuser from '../RANDOMUSER/Randomuser'
import WeatherApp from '../WEATHER/WeatherApp'
import WorkThree from './WorkThree'
// import Burger from './Burger'
import '../STYLES/App.scss'
import '../STYLES/Null.scss'

function App() {
  
  const showMenu  = useSelector(state => state.showMenu.showMenu)

  let windWidth = window.innerWidth;
  console.log(windWidth);
 
  useEffect(() => {
    console.log(showMenu);
    console.log('component did updata')
  },[showMenu])

  return (
    <Router>
      <div className="container col">
          <ul className="row nav-bar">
            {/* <Burger/>  */}
            <li><a href='/'>Skills</a></li>
            <li><a href='/randomuser'>Randomuser</a></li>
            <li><a href='/weather_app'>Weather App</a></li>
            <li><a href='/work_three'>Work 3</a></li>
          </ul>
        <Switch>
          <Route exact path='/' component={Skills}></Route>
          <Route exact path='/randomuser' component={Randomuser}></Route>
          <Route exact path='/weather_app' component={WeatherApp}></Route>
          <Route exact path='/work_three' component={WorkThree}></Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;

//className={showMenu}