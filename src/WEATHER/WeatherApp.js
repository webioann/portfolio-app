
import React,{useState} from 'react'
import Details from './Details';
import '../STYLES/WeatherApp.scss';

function WeatherApp() {
  const[data,setWeather] = useState({});
  const[city,setCity] = useState('City');
  const[isLoad,setisLoad] = useState(true);
  const[isError,setisError] = useState(false);
  
  const api = {
    key: "59f5158226fe5c049d50f354a9fa3f30",
    urlBase: "http://api.openweathermap.org/data/2.5/",
    lang: "ua",
  }
  let sunRise = '';
  let sunSet = '';

    async function restApi (evt)  {
      if(evt.key === "Enter" ) {
        try {
          let respons = await fetch(`${api.urlBase}weather?q=${city}&lang=${api.lang}&units=metric&appid=${api.key}`)
          let data = await respons.json()
            setWeather(data);
          console.log(data)

          localStorage.clear();
          localStorage.setItem('data',JSON.stringify(data));

        }
        catch (error) {
          setisError(true);
          console.error('BIG ERROR !!!')
        }
        finally {
          setisLoad(false)
        }
    }else{
        let dataq = localStorage.getItem('data')
        setWeather(JSON.parse(dataq));

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
          {(typeof data.main != "undefined") ? (
          <>
            <div className='location-wraper'>
              <div className="location">{data.name} ,{data.sys.country}  </div>
              <div className="date">{createDate}</div>
            </div>
            <div className='weather-wraper'>
              <div className="temper">{Math.round(data.main.temp)}&deg;C</div>
              <div className="weather">{data.weather[0].description}</div>
              <Details data={data}/>
            </div>
            
          </>
          ) : (
            <>
              <div className='location-wraper'>
                <div className="location">City ,UA  </div>
                <div className="date">{createDate}</div>
              </div>
              <div className='weather-wraper'>
                <div className="temper">0&deg;C</div>
                <div className="weather">Sunny</div>
              </div>
            </>
          )}
        </main>
      </div>
  );

}

export default WeatherApp;


// localStorage.setItem('city',weather.name);
// console.log(weather)
// 


  // if(weather.main.temp > 16) {
  //   setClas('app warm')
  // }else{
  //   setClas('app')
  // }

  // || 

  // let temper = Math.round(data.main.temp);
  // let png = data.weather[0].icon;
  // let srcc = `https://openweathermap.org/img/wn/${png}@2x.png`;
  // let deg = data.wind.deg;
  // wind.style = `transform: rotate(${deg}deg)`;
  // let speedWint = Math.round(data.wind.speed);

          // .then(res => res.json())
          // .then(result => {




  // let cityLoc = "Kiev";
  // let png = weather.weather[0].icon;
  // let srcc = `https://openweathermap.org/img/wn/${png}@2x.png`;
  // let deg = weather.wind.deg;
  // // wind.style = `transform: rotate(${deg}deg)`;
  // let wezer = localStorage.getItem('data')
  // let weatherData = JSON.parse(wezer);
  // console.log(weatherData)


