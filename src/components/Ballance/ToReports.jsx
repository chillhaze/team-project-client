import React from 'react';
import {
  StyledNavLink,
  Text,
  ToReportsWrapper,
} from './styled/ToReports.styled';

import icons from '../../images/icons.svg';

export default function ToReports() {
  return (
    <ToReportsWrapper>
      <StyledNavLink to={'/reports'}>
        <Text>Перейти к отчетам</Text>
        <svg width="24px" height="24px">
          <use href={icons + '#icon-statistic'}></use>
        </svg>
      </StyledNavLink>
    </ToReportsWrapper>
  );
}
