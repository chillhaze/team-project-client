import React from 'react';
import BalanceInReport from './BalanceInReport';
import CategoryList from './CategoryList';
import BarChart from './BarChart';
import CurrentPeriod from './CurrentPeriod';
import BackToMain from './BackToMain';
import ExpensesIncome from './ExpensesIncome';
import { Wrapper, CurrentPeriodWrapper,TabletWrapper } from './styled/Report.styled';
import SwitchType from './SwitchTypeTransaction';
import { useMediaQuery } from 'react-responsive';

const Report = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
   const isTablet = useMediaQuery({
    query: '(max-width: 1023px)',
  });

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
      {isMobile && 
        <>
      <CurrentPeriodWrapper>
      <CurrentPeriod selectedPeriod={selectedPeriod} />
      <BalanceInReport balance={balance} currency={currency} />
      <ExpensesIncome summExpenses={summExpenses} summIncome={summIncome} />
        </CurrentPeriodWrapper>
        <SwitchType selectedType={selectedType} />
      <CategoryList /> 
        </>
      }
      {!isMobile &&
      <CurrentPeriodWrapper>
        <TabletWrapper>
        <BalanceInReport balance={balance} currency={currency} />
        <CurrentPeriod selectedPeriod={selectedPeriod} />
       </TabletWrapper>
      <ExpensesIncome summExpenses={summExpenses} summIncome={summIncome} />
      <SwitchType selectedType={selectedType} />
      <CategoryList />     
        </CurrentPeriodWrapper> 
      }
      
      <BarChart />
    </Wrapper>
  );
};

export default Report;
