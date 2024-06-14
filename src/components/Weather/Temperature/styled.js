import styled from "styled-components"

const EstiloTemperature = styled.div`
    width: 90%;
    height: 130px;
    margin: 0 auto;
    border-radius: 30px;
    background: #0D00FC;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const TemperatureP = styled.p`
    font-size: 64px;
    color: white;
`
const CloudClimate = styled.img`
    width: 100px;
    height: 30px;
    background: black;
`

export { EstiloTemperature, TemperatureP, CloudClimate }