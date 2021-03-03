import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import '../STYLES/App.scss'
import About from './About'
import Home from './Home'
import Skills from './Skills'
import WorkOne from './WorkOne'
import WorkTwo from './WorkTwo'
import WorkThree from './WorkThree'

function App() {
  return (
    <Router>
      <div className="page">
        <ul className='nav-bar'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About me</a></li>
          <li><a href='/skills'>My skills</a></li>
          <li><a href='/work_one'>Work 1</a></li>
          <li><a href='/work_two'>Work 2</a></li>
          <li><a href='/work_three'>Work 3</a></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/skills' component={Skills}></Route>
          <Route exact path='/work_one' component={WorkOne}></Route>
          <Route exact path='/work_two' component={WorkTwo}></Route>
          <Route exact path='/work_three' component={WorkThree}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
