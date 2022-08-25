import { getValue } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"
import "./getValue.css"
import Weather from "../Weather/weather.js"

const GetValue = () => {
    const [enterValue, setEnterValue] = useState("")
    const [getValue, setGetValue] = useState("")

    return (
        <div className="main">
            <form>
                <input type="text" onChange={(e) => setEnterValue(e.target.value)}></input>
                <button onClick={(e) => {
                    e.preventDefault()
                    setGetValue(enterValue)
                }}>Enter</button>
            </form>
            {getValue && < Weather data={getValue}/>}
        </div>
    )
}
export default GetValue