import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

export default function CountryFull({name, capital, area, languages, flag}) {
  const[weather, setWeather] = useState({})

  useEffect(() => {
    const params = {
        params: {
          appid: process.env.REACT_APP_API_KEY,
          q: capital,
          units: 'metric'
        }  
    }
    
    axios.get('https://api.openweathermap.org/data/2.5/weather', params)
          .then(response => {
            setWeather(response.data)
          })
  }, [])

  if (Object.keys(weather).length > 0) {
    return (
      <div>
        <h2>{name}</h2>
        <div>
          capital {capital}
        </div>
        <div>
          area {area}
        </div>
        <h4>languages:</h4>
        <ul>{languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
        <img src={flag} width={300} height={200}></img>
        <h3>Weather in {capital}</h3>
        <div>
          temperature {weather.main.temp} Celcius
        </div>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        <div>
          wind {weather.wind.speed} m/s
        </div>
      </div>
    )
  }
  
  return (
  <div>
    <h2>{name}</h2>
    <div>
      capital {capital}
    </div>
    <div>
      area {area}
    </div>
    <h4>languages:</h4>
    <ul>{languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
    <img src={flag} width={200} height={200}></img>
    <h3>Weather in {capital}</h3>
  </div>
  )
}