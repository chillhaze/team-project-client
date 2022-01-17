import React from 'react';
import { Wrapper } from './styled/BalanceInReport.styled';

function BalanceInReport({ balance, currency }) {
  return (
    <Wrapper>
      <h3>Баланс:</h3>
      <p>
        {balance}
        {currency}
      </p>
    </Wrapper>
  );
}

export default BalanceInReport;
