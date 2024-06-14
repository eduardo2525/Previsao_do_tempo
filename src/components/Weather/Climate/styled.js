import styled from "styled-components";

const EstiloCimate = styled.div`
    width: 90%;
    height: 140px;
    margin: 0 auto;
    position: relative;
    top: 10px;
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

export { EstiloCimate, TempContainer, Span, Paragraph }