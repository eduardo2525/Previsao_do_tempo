import React from "react";

import { EstiloTemperature, TemperatureP, CloudClimate } from "./styled.js"


function Temperature({ temperatura, cloud }) {
    return (
        <EstiloTemperature>
            <CloudClimate>
                {cloud}
            </CloudClimate>
            <TemperatureP>{temperatura} °C</TemperatureP>
        </EstiloTemperature>
    )
}

export default Temperature