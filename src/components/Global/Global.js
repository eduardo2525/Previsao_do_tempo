import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import BackgroundImage from '../../img/montanhas.jpg'

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: aqua;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`
const Container = styled.div`
    width: 800px;
    height: 500px;
    border-radius: 8px;
    background-image: url(${BackgroundImage});
    opacity: 0.7;
`

export { EstiloGlobal, Container };