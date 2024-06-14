import React from "react"

import { EstiloCimate, TempContainer, Span, Paragraph } from "./styled"
import { FaTemperatureHigh } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { FaWind } from "react-icons/fa"

function Climate() {
    return (
        <EstiloCimate> 
            <TempContainer >
                <FaTemperatureHigh fontSize={30} style={{ marginTop: '15px' }}/>
                <div>
                    <Paragraph>Temp.max</Paragraph>
                    <Span>{32}°C</Span>
                </div>
            </TempContainer>
            <TempContainer>
                <FaTemperatureHigh fontSize={30} style={{ marginTop: '15px' }}/>
                <div>
                    <Paragraph>Temp.min</Paragraph>
                    <Span>{32}°C</Span>
                </div>
            </TempContainer>
            <TempContainer>
                <WiHumidity fontSize={30} style={{ marginTop: '15px' }}/>
                <div>
                    <Paragraph>Humidade</Paragraph>
                    <Span>{32}%</Span>
                </div>
            </TempContainer>
            <TempContainer>
                <FaWind fontSize={30} style={{ marginTop: '15px' }}/>
                <div>
                    <Paragraph>vento</Paragraph>
                    <Span>{50}Km/h</Span>
                </div>
            </TempContainer>
        </EstiloCimate>
    )
}

export default Climate