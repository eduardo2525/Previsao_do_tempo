import styled from "styled-components";

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

export default Button