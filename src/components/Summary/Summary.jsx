import { Wrapper, Table, TableHeader, TableLine, Month } from './Summary.styled';
// import { useEffect } from 'react';
// import дописать функцию сводки за 6 месяцев в redux/transactions (summarySixMonths);
// import { useSelector, useDispatch } from 'react-redux';
// import { getToken } from '../../redux/auth/auth-selectors';
// import { getSummary } from '../../redux/transactions/transactions-selectors';

export default function Summary() {
 
  // const token = useSelector(getToken);
  // const summary = useSelector(getSummary);
  // const dispatch = useDispatch();
  // let type="expense";

  // useEffect(() => dispatch(summarySixMonths(type,token)),[token,type,dispatch]);

  // В таблицу будут добавляться максимум 6 месяцев.
  // Если, например, будет доступно всего 3 месяца, то половина табл. будет серой без горизонтальн. линий.
  // Позже добавлю логику отрисовки вовнутрь табл.
  return (
    <Wrapper>
      <TableHeader>Сводка</TableHeader>
      <Table>
        <tbody>
          <TableLine
          >
            <Month>
            </Month>
            <td>
            </td>
            </TableLine>
        </tbody>
      </Table>
    </Wrapper>
  );
}

