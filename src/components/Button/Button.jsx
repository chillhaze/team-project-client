import React from 'react';
import { Button, ButtonsWrapper } from './styled/Button.styled';

const ButtonsSet = ({ value1, value2, onClose }) => {
  const wantToStay = (e) => {
    const buttonName = e.target.name
      if (buttonName.toLowerCase() === "нет") {
        onClose()
      }
  }

  return (
    <ButtonsWrapper>
      <Button type="button">{value1}</Button>
      <Button type="button" name={value2} onClick={(e)=>wantToStay(e)}>{value2}</Button>
    </ButtonsWrapper>
  );
};

export default ButtonsSet;
