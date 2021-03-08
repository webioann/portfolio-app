import '../STYLES/WeatherApp.scss';
import React,{useState} from 'react'

function WeatherApp() {
  const[weather,setWeather] = useState({});
  const[city,setCity] = useState('Kiev');
  const[clas,setClas] = useState('app');


  const api = {
    key: "e9cf5b304e10d7cfd48b8992cc65b041",
    urlBase: "http://api.openweathermap.org/data/2.5/",
    lang: "en",
  }

  const restApi = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.urlBase}weather?q=${city}&lang=${api.lang}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setCity('');
        console.log(weather)
      });
    }
  }

  let createDate = '';
    const dateBuilder = () => {
      let months = ['January','February','March','April', 'May', 'June','July', 'August', 'September','October','November','December'];
      let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      let dat = new Date();
    
      let day = days[dat.getDay()];
      let date = dat.getDate();
      let mounth = months[dat.getMonth()];
      let year = dat.getFullYear();

      createDate = `${day} ${date} ${mounth} ${year}`
    }
  dateBuilder();

  // if(weather.main.temp > 16) {
  //   setClas('app warm')
  // }else{
  //   setClas('app')
  // }


  return (
      <div className='app'>
            <main>
              <div className="sourch-wraper">
                <input 
                  className='sourch-bar'
                  type='text'
                  placeholder='Search...'
                  onChange={e => setCity(e.target.value)}
                  value={city}
                  onKeyPress={restApi} />
              </div>
          {(typeof weather.main != "undefined") ? (
            <>
              <div className='location-wraper'>
                <div className="location">{weather.name},{weather.sys.country} </div>
                <div className="date">{createDate}</div>
              </div>
              <div className='weather-wraper'>
                <div className="temper">{Math.round(weather.main.temp)}&deg;C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </>

          ) : ('')}
            </main>
      </div>
  );
}

export default WeatherApp;
