import React from 'react';
import { Wrapper, Button, Text } from './styled/SwitchTypeTransaction.styled';
import icons from '../../images/icons.svg';

function SwitchType({ name, onHandlerChangeType }) {
  return (
    <Wrapper>
      <Button type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-left'}></use>
        </svg>
      </Button>
      <Text>{name}</Text>
      <Button type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </Button>
    </Wrapper>
  );
}

export default SwitchType;
