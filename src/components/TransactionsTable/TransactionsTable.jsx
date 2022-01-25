import { Wrapper, BtnDelete } from './TransactionsTable.styled';
import * as React from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import * as transactionOperations from '../../redux/transactions/transactions-operations';
import * as transactionSelectors from '../../redux/transactions/transactions-selectors';
// import categories from '../../template/categories.json';
import { getFilteredCategories } from '../../redux/categories/categories-selectors';
import { getCategories } from '../../redux/categories/categories-selectors';
import transformDate from '../../utils/transformDate';
import icons from '../../images/icons.svg';
import {
  getType,
  getPeriod,
} from '../../redux/transactions/transactions-selectors';

const TransactionsTable = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          background: {
            default: '#f60d0d',
            paper: '#fbfbfbfb',
          },
          primary: {
            main: '#10f51b',
          },
          secondary: {
            main: '#f0223d',
          },
        },
      }),
    [],
  );

  const dispatch = useDispatch();
  const transactions = useSelector(transactionSelectors.getTransactionsData);
  const type = useSelector(getType);
  const filteredCategories = useSelector(getFilteredCategories);
  const allCategories = useSelector(getCategories);

  const period = useSelector(getPeriod);

  useEffect(() => {
    dispatch(transactionOperations.getTransactions({ type, period }));
  }, [dispatch, period, type]);

  const handleDeleteTransaction = id => {
    dispatch(transactionOperations.deleteTransaction(id));
    return;
  };

  console.log('categories', filteredCategories);
  console.log('transactions', transactions);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>дата</TableCell>
                <TableCell>описание</TableCell>
                <TableCell>категория</TableCell>
                <TableCell>сумма</TableCell>
                <TableCell>&nbsp;</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {transactions.length !== 0 &&
                transactions.map(
                  ({ _id, completedAt, description, category, amount }) => (
                    <TableRow key={_id}>
                      <TableCell>{transformDate(completedAt)}</TableCell>
                      <TableCell>{description}</TableCell>
                      <TableCell>
                        {allCategories.length !== 0 &&
                          allCategories.find(elem => {
                            // console.log('elem', elem._id);
                            // console.log('elem', elem._id === category);
                            // console.log('category', category);

                            return elem._id === category;
                          }).name}
                      </TableCell>
                      <TableCell>
                        {type === 'credit' ? '-' : ''}
                        {amount}.00 грн.
                      </TableCell>
                      <TableCell>
                        <BtnDelete
                          type="button"
                          onClick={() => handleDeleteTransaction(_id)}
                        >
                          <svg width="14.7px" height="18px">
                            <use href={icons + '#icon-delete'}></use>
                          </svg>
                        </BtnDelete>
                      </TableCell>
                    </TableRow>
                  ),
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </Wrapper>
  );
};

export default TransactionsTable;
