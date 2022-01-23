import React from 'react';
import {
  Wrapper,
  List,
  Item,
  Text,
  AmountRed,
  AmountGreen,
  Bar,
} from './styled/ExpensesIncome.styled';
import icons from '../../images/icons.svg';

function ExpensesIncome({ totalCost, totalIncome }) {
  return (
    <Wrapper>
      <Bar height="70px" width="2px">
        <use href={icons + '#icon-bar'} />
      </Bar>
      <List>
        <Item>
          <Text>Расходы:</Text>
          <AmountRed>-{totalCost}</AmountRed>
        </Item>
        <Item>
          <Text>Доходы:</Text>
          <AmountGreen>+{totalIncome}</AmountGreen>
        </Item>
      </List>
    </Wrapper>
  );
}

export default ExpensesIncome;
