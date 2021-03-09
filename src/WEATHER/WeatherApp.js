
import React,{useState,useEffect} from 'react'
import Details from './Details';
import DefaultPage from './DefaultPage';
import '../STYLES/WeatherApp.scss';

function WeatherApp() {
  const[data,setWeather] = useState({});
  const[city,setCity] = useState('');
  const[isLoad,setisLoad] = useState(true);
  const[isError,setisError] = useState(false);

  async function restApi (evt)  {
    if(evt.key === "Enter") {
      try {
        const api = {
          key: "59f5158226fe5c049d50f354a9fa3f30",
          urlBase: "http://api.openweathermap.org/data/2.5/",
          lang: "ua",
        }
        // localStorage.clear();

        let respons = await fetch(`${api.urlBase}weather?q=${city}&lang=${api.lang}&units=metric&appid=${api.key}`)
        let dataWeather = await respons.json()
          setWeather(dataWeather);
      
      }
      catch (error) {
        setisError(true);
        console.error('BIG ERROR !!!')
      }
      finally {
        setisLoad(false)
      }
    }else{
       console.log('E L S E')
       let dataW = localStorage.getItem('data')
       setWeather(JSON.parse(dataW)); 
       console.log(data)

    }
  }
  useEffect(() => {
   
    localStorage.setItem('data',JSON.stringify(data));

  },[data])

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
  
  const chooseCity = (event) => {
    setCity(event.target.value)
  }

    return (
      <div >
        <div className='weather-app'>
          <main>
            <div className="sourch-wraper">
              <input 
                className='sourch-bar'
                type='text'
                placeholder='Search...'
                onChange={chooseCity}
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
                <div className="temper">{Math.round(data.main.temp)}&deg;C
                  <div className="weather">
                    <span> {data.weather[0].description} </span>
                    <img src={`https://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png` } alt=''/>
                  </div>
                </div>
                <Details data={data}/>
              </div>
            </>
            ) : (
              <DefaultPage/>
            )}
          </main>
        </div>

      </div>
  );

}

export default WeatherApp;
