import styled from "styled-components";

const EstiloForm = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #07d4f3;
    display: none;
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

    &::placeholder {
        color: black;
        font-family: cursive;
        font-weight: 700;
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


export { EstiloForm, Button, Input }