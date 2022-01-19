import React from 'react';
import { Wrapper, List, Item, Text, AmountRed, AmountGreen, Bar } from './styled/ExpensesIncome.styled';
import icons from '../../images/icons.svg'

function ExpensesIncome({ summExpenses, summIncome }) {
  return (
    <Wrapper>
       <Bar height="70px" width="2px">
        <use href={icons + "#icon-bar" }/>
      </Bar>
      <List>
        <Item>
          <Text>Расходы:</Text>
          <AmountRed>{summExpenses}</AmountRed>
        </Item>
        <Item>
          <Text>Доходы:</Text>
          <AmountGreen>{summIncome}</AmountGreen>
        </Item>
      </List>
    </Wrapper>
  );
}

export default ExpensesIncome;
