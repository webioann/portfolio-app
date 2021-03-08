import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Skills from './Skills'
import Randomuser from '../RANDOMUSER/Randomuser'
import WeatherApp from './WeatherApp'
import WorkThree from './WorkThree'
import '../STYLES/Page.scss'

function App() {
  return (
    <Router>
      <div className="container">
        <ul className='nav-bar'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About me</a></li>
          <li><a href='/skills'>My skills</a></li>
          <li><a href='/randomuser'>Randomuser</a></li>
          <li><a href='/weather_app'>Weather App</a></li>
          <li><a href='/work_three'>Work 3</a></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/skills' component={Skills}></Route>
          <Route exact path='/randomuser' component={Randomuser}></Route>
          <Route exact path='/weather_app' component={WeatherApp}></Route>
          <Route exact path='/work_three' component={WorkThree}></Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
