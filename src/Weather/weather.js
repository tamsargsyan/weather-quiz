import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import "./weather.css"
import GetValue from "../GetValue/getValue.js"

const Weather = (props) => {
    const [img, setImg] = useState("")
    const [temp, setTemp] = useState("")
    const [city, setCity] = useState("")
    const [main, setMain] = useState("")
    
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.data}&appid=50a7aa80fa492fa92e874d23ad061374`).then(resp => {
            console.log(resp.data)
            setImg(resp.data.weather[0].icon)
            setCity(resp.data.name)
            setTemp(resp.data.main.temp)
            setMain(resp.data.weather[0].main)
        }).catch((err) => console.log(err))
      }, [])
      return (
        <div className="container">
            <div className="wrapper">
                <img src={`http://openweathermap.org/img/wn/${img}.png`}/>
                <div className="info-weather">
                    <h1>{Math.floor(temp - 273)}°C</h1>
                    <h2>{main}</h2>
                </div>
            </div>
            <h2>📍 {city}</h2>
        </div>
      )
}
export default Weather