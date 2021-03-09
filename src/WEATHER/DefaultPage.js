import React from 'react'
import '../STYLES/WeatherApp.scss';

function DefaultPage() {

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
        <div>
            <div className='location-wraper'>
                <div className="location">New York ,US  </div>
                <div className="date">{createDate}</div>
            </div>
            <div className='weather-wraper'>
                <div className="temper">20&deg;C
                  <div className="weather">
                    <span> Sunny </span>
                    {/* <img src={`https://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png` } alt=''/> */}
                  </div>
                </div>
                <div className='details'>
                    <p>Wind : south-west  10 m/s</p>
                    <p>Sunrise : 06:00</p>
                    <p>Sunset : 20:00</p>
                    <p>Pressure : 760mm rt col</p>
                </div>
            </div>
        </div>
    )
}
export default DefaultPage;