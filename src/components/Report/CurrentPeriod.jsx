import React from 'react';
import icons from '../../images/icons.svg';
import {
  Wrapper,
  ArrowBackBtn,
  DateContainer,
  PeriodTitle,
  BalancePeriod,
  BalancePeriodWrapper,
} from './styled/CurrentPeriod.styled';

function CurrentPeriod({ month, year, onClick }) {
  const monthArr = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  return (
    <Wrapper>
      <PeriodTitle>Текущий период:</PeriodTitle>
      <DateContainer>
        <ArrowBackBtn type="button" name="prev" onClick={onClick}>
          <svg width="4px" height="10px">
            <use href={icons + '#icon-arrow-left'}></use>
          </svg>
        </ArrowBackBtn>
        <BalancePeriodWrapper>
          <BalancePeriod>
            {monthArr[month]}
            {year}
          </BalancePeriod>
        </BalancePeriodWrapper>
        <ArrowBackBtn type="button" name="next" onClick={onClick}>
          <svg width="4px" height="10px">
            <use href={icons + '#icon-arrow-right'}></use>
          </svg>
        </ArrowBackBtn>
      </DateContainer>
    </Wrapper>
  );
}

export default CurrentPeriod;
