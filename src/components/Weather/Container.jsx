import React from "react"

import { EstiloWeather } from "./styled"
import City from "./Title/LocationCity"
import Temperature from "./Temperature/Temperature"
import Climate from "./Climate/Climate"


function ContainerWeather() {
    return (
        <EstiloWeather>
            <City />
            <Temperature  temperatura="32"/>
            <Climate />
        </EstiloWeather>
    )
}

export default ContainerWeather