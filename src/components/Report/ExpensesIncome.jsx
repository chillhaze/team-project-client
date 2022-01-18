import React from 'react';
import { Wrapper } from './styled/ExpensesIncome.styled';

function ExpensesIncome({ summExpenses, summIncome }) {
  return (
    <Wrapper>
      <ul>
        <li>
          <p>Расходы:</p>
          <span>{summExpenses}</span>
        </li>
        <li>
          <p>Доходы:</p>
          <span>{summIncome}</span>
        </li>
      </ul>
    </Wrapper>
  );
}

export default ExpensesIncome;
