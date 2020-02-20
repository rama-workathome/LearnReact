import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({city, country}) => {
    const url = 'http://api.weatherstack.com/current?access_key=5490102701e1ea48b8578150a7e1fa77&units=f&query=' + city + ',' + country
    
    const [weather, setWeather] = useState(null)

    const hookWeather = () => {
        axios.get(url).then(response=> {setWeather(response.data.current)})
    }
    
    useEffect(hookWeather,[])

    if(weather !== null) {
        return (
            <div>
                <h2>Weather in {city}</h2>
                <p>temperature: {weather.temperature} F</p>
                <p><img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} /><br />
            {weather.weather_descriptions[0]}
            </p>
            <p>wind: {weather.wind_speed} mph from the {weather.wind_dir}</p>
            </div>
        )
    } else {
        return null
    }
}

export default Weather
