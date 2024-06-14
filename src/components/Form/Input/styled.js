import styled from "styled-components";

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

export default Input