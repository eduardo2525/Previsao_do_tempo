import React from "react"
import { useState } from "react"

import { IoLocationSharp } from "react-icons/io5"
import { IoSearch } from "react-icons/io5"
import { FaTemperatureHigh } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { FaWind } from "react-icons/fa"

import { EstiloForm, Button, Input, EstiloWeather } from "./Styled"

function Formulario() {
    const [city, setCity] = useState("")
    const [weather, setweather] = useState({})
    const [searchSuccessful, setSearchSuccessful] = useState(false)

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()

        const apiKey = "49752d88995a42f657d8edfa5dacb5dc"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${apiKey}&units=metric&lang=pr_br`)
        .then((response) => {
            if(response.status === 200) {
                return response.json()
            }else {
                return alert("Digite o nome de um Estado")
            }
        })
        .then((data) => {
            setweather(data)
            setSearchSuccessful(true)
        })

        setCity('')
    }

    return (
        <>
            <EstiloForm>
                <IoLocationSharp size={30}/>
                <Input
                    onChange={handleChange}
                    value={city}
                    placeholder="Sua Cidade"/>
                <Button
                    onClick={handleSearch}
                    type="search"
                    >
                    <IoSearch size={30} />
                </Button>
            </EstiloForm>
            {searchSuccessful && weather && (
                <EstiloWeather>
                    <h1 className="title">{weather.name}</h1>
                    <div className="temperature">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        <p className="tempParagraph">{weather.main.temp.toFixed(1).replace('.', ',')}ºC</p>
                    </div>
                    <div className="estiloCimate">
                        <div className="tempContainer">
                            <FaTemperatureHigh fontSize={30} style={{ marginTop: '15px' }}/>
                            <div>
                                <p>Temp.max</p>
                                <span>{weather.main.temp_max}ºC</span>
                            </div>
                        </div>
                        <div className="tempContainer">
                            <FaTemperatureHigh fontSize={30} style={{ marginTop: '15px' }}/>
                            <div>
                                <p>Temp.min</p>
                                <span>{weather.main.temp_min}ºC</span>
                            </div>
                        </div>
                        <div className="tempContainer">
                            <WiHumidity fontSize={30} style={{ marginTop: '15px' }}/>
                            <div>
                                <p>Humidade</p>
                                <span>{weather.main.humidity}%</span>
                            </div>
                        </div>
                        <div className="tempContainer">
                            <FaWind fontSize={30} style={{ marginTop: '15px' }}/>
                            <div>
                                <p>Vento</p>
                                <span>{(weather.wind.speed * 3.6).toFixed(0).replace('.', ',')}Km/h</span>
                            </div>
                        </div>
                    </div>
                </EstiloWeather>
            )}
        </>
    )
}

export default Formulario