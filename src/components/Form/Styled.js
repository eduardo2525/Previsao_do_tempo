import styled from "styled-components";

const EstiloForm = styled.form`
    margin: 0 auto;
    position: relative;
    top: 30px;
    background: #07d4f3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 350px;
    height: 50px;
    border-radius: 10px;
`
const Input = styled.input`
    width: 200px;
    height: 30px;
    font-size: 16px;
    padding-left: 10px;
    font-weight: 700;

    &::placeholder {
        color: black;
        font-family: cursive;
    }
`

const Button = styled.button`
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    background: white;

    &:hover {
        background: green;
        color: white;
    }
`

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

    .title {
        text-align: center;
        padding: 10px;
    }
    .temperature {
        width: 90%;
        height: 130px;
        margin: 0 auto;
        border-radius: 30px;
        background: #0D00FC;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .tempParagraph {
        font-size: 64px;
        color: white;
    }
    .imgClimate {
        width: 100px;
        height: 30px;
        background: black;
    }
    .estiloCimate {
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
    }
    .tempContainer {
        width: 90%;
        height: 65px;
        border-radius: 8px;
        background: #0D00FC;
        color: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        justify-items: center;
        gap: 10px;
    }
    span {
        font-size: 24px;
    }
    p {
        font-size: 20px;
    }
`

export { EstiloForm, Button, Input, EstiloWeather }