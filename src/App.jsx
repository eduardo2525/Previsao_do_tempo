import React from "react";

import { EstiloGlobal, Container }  from "./components/Global/Global";
import Formulario from "./components/Form/Form";


function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Formulario />
      </Container>
    </>
  );
}

export default App;
