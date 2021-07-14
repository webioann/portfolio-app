import React from 'react'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Resume from './Resume'
import Randomuser from '../RANDOMUSER/Randomuser'
import WeatherApp from '../WEATHER/WeatherApp'
import WorkThree from './WorkThree'
import Navbar from './Navbar'
import '../STYLES/App.scss'
import '../STYLES/Null.scss'

function App() {

  return (
    <Router>
      <div className="container">
        <Navbar/>
        <div className='col app'>
          <Switch>
            <Route exact path='/' component={Resume}></Route>
            <Route exact path='/randomuser' component={Randomuser}></Route>
            <Route exact path='/weather_app' component={WeatherApp}></Route>
            <Route exact path='/work_three' component={WorkThree}></Route>
          </Switch>
        </div>
      </div>  
    </Router>
  );
}

export default App;

// ===========================STORAGE=======================//

 // import {useSelector} from "react-redux"
//  ,{useEffect} 
// const showMenu  = useSelector(state => state.showMenu.showMenu)

 
// useEffect(() => {
//   console.log(showMenu);
//   console.log('component did updata')
// },[showMenu])

//className={showMenu}
// import Burger from './Burger'


{/* <ul className="row nav-bar">
<Burger/> 
<li><a href='/'>Resume</a></li>
<li><a href='/randomuser'>Randomuser</a></li>
<li><a href='/weather_app'>Weather App</a></li>
<li><a href='/work_three'>Work 3</a></li>
</ul> */}
