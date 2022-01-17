import React from 'react';
import icons from '../../images/icons.svg';
import { Wrapper } from './styled/CurrentPeriod.styled';

function CurrentPeriod({ selectedPeriod, onClickBack, onClickForvard }) {
  return (
    <Wrapper>
      <h3>Период</h3>
      <button type="button" onClick={onClickBack}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-left'}></use>
        </svg>
      </button>
      <p>{selectedPeriod}</p>
      <button type="button" onClick={onClickForvard}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </button>
    </Wrapper>
  );
}

export default CurrentPeriod;
