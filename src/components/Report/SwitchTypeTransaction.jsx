import React from 'react';
import { Wrapper } from './styled/SwitchTypeTransaction.styled';
import icons from '../../images/icons.svg';

function SwitchType({ onClickBack, selectedType, onClickForvard }) {
  return (
    <Wrapper>
      <button type="button" onClick={onClickBack}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-left'}></use>
        </svg>
      </button>
      <p>{selectedType}</p>
      <button type="button" onClick={onClickForvard}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </button>
    </Wrapper>
  );
}

export default SwitchType;
