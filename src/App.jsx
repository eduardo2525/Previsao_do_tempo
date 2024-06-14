import React from "react";

import { EstiloGlobal, Container }  from "./components/Global/Global";
import Formulario from "./components/Form/Form";
import ContainerWeather from "./components/Weather/Container"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Formulario />
        <ContainerWeather />
      </Container>
    </>
  );
}

export default App;
