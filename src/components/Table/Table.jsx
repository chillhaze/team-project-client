import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as transactionOperations from '../../redux/transactions/transactions-operations';
import * as transactionSelectors from '../../redux/transactions/transactions-selectors';
import categories from '../../template/categories.json';
import transactions from '../../template/transactions.json';
import transformDate from '../../utils/transformDate';

const TransactionsTable = () => {
  // const dispatch = useDispatch()
  // const transactions = useSelector(transactionSelectors.getFinanceData);

  // useEffect(() => {
  //   dispatch(transactionOperations.getFinance());
  // }, [dispatch]);

  // const handleDeleteTransaction = id => {
  //   //transactions to delete id
  //   dispatch(transactionOperations.deleteTransaction(id));
  //   //get updated transactions
  //   dispatch(transactionOperations.getFinance());
  //   return;
  // };

  //фильтр по дате
  // const [selected, setSelected] = useState({ day: '', month: '', year: '' });

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>дата</td>
            <td>описание</td>
            <td>категория</td>
            <td>сумма</td>
            <td>&nbsp;</td>
          </tr>
        </thead>

        <tbody>
          {transactions &&
            transactions.map(
              ({ _id, completedAt, description, category, amount }) => (
                <tr key={_id}>
                  <td>{transformDate(completedAt)}</td>
                  <td>{description}</td>
                  <td>{categories.entities[category].name}</td>
                  <td>{amount}</td>
                  <td>
                    {/* <button type="button" onClick={handleDeleteTransaction(_id)}> */}
                    <button>Удалить</button>
                  </td>
                </tr>
              ),
            )}
        </tbody>
      </table>
    </>
  );
};

export default TransactionsTable;
