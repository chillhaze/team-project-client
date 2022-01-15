import React from 'react';
import { Button, ButtonsWrapper, Span } from './styled/Button.styled';

const ButtonsSet = ({ value1, value2 }) => {
  return (
    <ButtonsWrapper>
      <Button type="button"><Span>{value1}</Span></Button>
      <Button type="button"><Span>{value2}</Span></Button>
    </ButtonsWrapper>
  );
};

export default ButtonsSet;
