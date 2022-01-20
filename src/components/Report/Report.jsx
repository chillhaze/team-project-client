import React from 'react';
import BalanceInReport from './BalanceInReport';
import CategoryList from './CategoryList';
import BarChart from './BarChart';
import CurrentPeriod from './CurrentPeriod';
import BackToMain from './BackToMain';
import ExpensesIncome from './ExpensesIncome';
import { Wrapper, CurrentPeriodWrapper } from './styled/Report.styled';
import SwitchType from './SwitchTypeTransaction';

const Report = () => {
  // временная заглушка
  const selectedPeriod = 'Ноябрь 2019';
  const balance = '0.00';
  const currency = 'uah';
  const summExpenses = '0.00';
  const summIncome = '0.00';
  const selectedType = 'Расходы';

  return (
    <Wrapper>
      <BackToMain/>
      <CurrentPeriodWrapper>
      <CurrentPeriod selectedPeriod={selectedPeriod} />
      <BalanceInReport balance={balance} currency={currency} />
      <ExpensesIncome summExpenses={summExpenses} summIncome={summIncome} />
     </CurrentPeriodWrapper>
      <SwitchType selectedType={selectedType} />
      <CategoryList />
      <BarChart />
    </Wrapper>
  );
};

export default Report;
