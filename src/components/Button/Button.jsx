import React from "react";
import { Button,ButtonsWrapper  } from "./Button.styled";

const ButtonsSet = ({ value1,value2 }) => {
    return (
        <ButtonsWrapper>
        <Button type="button">{value1}</Button>
        <Button type="button">{value2}</Button>
        </ButtonsWrapper>)
}

export default ButtonsSet