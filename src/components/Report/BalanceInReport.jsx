import React from 'react';
import {
  Wrapper,
  BalanceTitle,
  BalanceWrapper,
  BalanceAmount,
} from './styled/BalanceInReport.styled';

function BalanceInReport({ balance, currency }) {
  return (
    <Wrapper>
      <BalanceTitle>Баланс:</BalanceTitle>
      <BalanceWrapper>
        <BalanceAmount>
          {balance}
          {currency}
        </BalanceAmount>
      </BalanceWrapper>
    </Wrapper>
  );
}

export default BalanceInReport;
