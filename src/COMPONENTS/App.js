import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import '../STYLES/App.scss'
import About from './About'
import Home from './Home'
import Skills from './Skills'
import Works from './Works'

function App() {
  return (
    <Router>
      <div className="App">
        <ul className='nav-bar'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About me</a></li>
          <li><a href='/skills'>My skills</a></li>
          <li><a href='/works'>Works</a></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/skills' component={Skills}></Route>
          <Route exact path='/works' component={Works}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
