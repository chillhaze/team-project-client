import React from 'react';
import { Wrapper } from './styled/SwitchTypeTransaction.styled';
import icons from '../../images/icons.svg';

function SwitchType({ name, onHandlerChangeType }) {
  return (
    <Wrapper>
      <button type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-left'}></use>
        </svg>
      </button>
      <p>{name}</p>
      <button type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </button>
    </Wrapper>
  );
}

export default SwitchType;
