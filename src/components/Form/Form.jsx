import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import EstiloForm from "./Styled";
import Input from "./Input/styled";
import Button from "./Button/Button";


function Formulario() {

    return (
        <EstiloForm>
            <IoLocationSharp size={30}/>
            <Input placeholder="Sua Cidade"/>
            <Button type="search">
                <IoSearch size={30} />
            </Button>
        </EstiloForm>
    )
}

export default Formulario