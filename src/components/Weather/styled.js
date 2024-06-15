import styled from "styled-components";

const EstiloWeather = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #07d4f3;
    opacity: 0.8;
    border-radius: 30px;
    width: 350px;
    height: 350px;
    display: grid;
`
const Tittle = styled.h1`
    text-align: center;
    padding: 10px;
`

const Temperature = styled.div`
    width: 90%;
    height: 130px;
    margin: 0 auto;
    border-radius: 30px;
    background: #0D00FC;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const TempParagraph = styled.p`
    font-size: 64px;
    color: white;
`

const ImgClimate = styled.img`
    width: 100px;
    height: 30px;
    background: black;
`
const EstiloCimate = styled.div`
    width: 90%;
    height: 150px;
    margin: 0 auto;
    position: relative;
    top: 5px;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
`
const TempContainer = styled.div`
    width: 90%;
    height: 65px;
    border: 2px solid grey;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-items: center;
    gap: 10px;
`
const Span = styled.span`
    font-size: 24px;
`
const Paragraph = styled.p`
    font-size: 20px;
`

export { EstiloWeather, Tittle, Temperature, TempParagraph, ImgClimate, EstiloCimate, TempContainer, Span, Paragraph }