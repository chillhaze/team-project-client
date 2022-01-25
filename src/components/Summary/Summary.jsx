import { Wrapper, Table, TableHeader, TableLine, Month } from './Summary.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as reportsSelectors from '../../redux/reports/reports-selectors';
import * as reportsOperations from '../../redux/reports/reports-operations';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
import { monthSelectors } from '../../redux/reports/reports-slice';
// import * as transactionOperations from '../../redux/transactions/transactions-operations';
// import * as transactionSelectors from '../../redux/transactions/transactions-selectors';

// import { getSixMonthsBalance } from '../../redux/transactions/transactions-operations';
// import { getToken } from '../../redux/auth/auth-selectors';
// import { getType, getPeriod } from '../../redux/transactions/transactions-selectors';
// import { MonthName } from './Month';
// import { getReportsDetailed } from 'redux/reports/reports-operations';

export default function Summary() {
  const dispatch = useDispatch();
  const date = new Date();
  const currMonth = date.getMonth();
  console.log(currMonth);
  // const currYear = date.getFullYear();
  
  // const monthToday = MonthName(currMonth);

  let type = useSelector(transactionsSelectors.getType);
  let period = new Date().getFullYear();

  useEffect(() => {
    dispatch(reportsOperations.getReportsSummary({ type, period }));
  }, [dispatch, period, type]);

  const summary = useSelector(reportsSelectors.getReportsSummary);
  console.log(summary);


  const month = useSelector(state =>
    monthSelectors.selectById(state, Number(currMonth)),
  );
  

  // const sum = summary.entities;
  // console.log(sum);

  // const month = useSelector(state =>
  //   summary.selectById(state, Number(currMonth)));
  
  console.log(month);


  return (
    <Wrapper>
      <TableHeader>Сводка</TableHeader>
      <Table>
        <tbody>
          <TableLine >
            <Month></Month>
            <td></td>
          </TableLine>
          
            
        </tbody>
      </Table>
    </Wrapper>
  );
}