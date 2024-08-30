import React, { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import './Main.css';
export default function WeatherApp() {

    const [weatherInfo, SetWeatherInfo]= useState({
            city:"PUNE",
            feelsLike:24.84,
            temp:43.43,
            tempMin:43.03,
            temMax:43.93,
            humidity:43,
            weather:"haze", 
    });
  
    let updateInfo = (newInfo) =>{
        SetWeatherInfo(newInfo)
    }
    
  return (
    <div>
        <h2 style={{color:"white"}}>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
  
    </div>
  )
}



