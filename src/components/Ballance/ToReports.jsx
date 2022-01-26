import React from 'react';
import {
  StyledNavLink,
  Text,
  ToReportsWrapper,
} from './styled/ToReports.styled';

import icons from '../../images/icons.svg';
import { getReportsDetailed } from 'redux/reports/reports-operations';
import { useDispatch } from 'react-redux';
import { setType } from 'redux/transactions/transactions-slice';

export default function ToReports() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const dispatch = useDispatch();

  function handlerReport(e) {
    e.preventDefault();
    dispatch(getReportsDetailed({ year, month }));
    dispatch(setType('credit'));
    // navigate('/reports');
  }

  return (
    <ToReportsWrapper onClick={handlerReport}>
      <StyledNavLink to={'/reports'}>
        <Text>Перейти к отчетам</Text>
        <svg width="24px" height="24px">
          <use href={icons + '#icon-statistic'}></use>
        </svg>
      </StyledNavLink>
    </ToReportsWrapper>
  );
}
