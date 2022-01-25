import React from 'react';

import {
  Wrapper,
  NameReport,
  SwitcherReport,
  Button,
  Text } from './styled/SwitchTypeTransaction.styled';

import icons from '../../images/icons.svg';

function SwitchType({ name, onHandlerChangeType }) {
  return (
    <Wrapper>
      <SwitcherReport type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-left'}></use>
        </svg>
      </SwitcherReport>
      <NameReport>{name}</NameReport>
      <SwitcherReport type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </SwitcherReport>

{/* <Button type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-left'}></use>
        </svg>
      </Button>
      <Text>{name}</Text>
      <Button type="button" onClick={onHandlerChangeType}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </Button> */}

    </Wrapper>
  );
}

export default SwitchType;
