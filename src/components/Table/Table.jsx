import { Wrapper, BtnDelete } from './Table.styled';
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
import categories from '../../template/categories.json';
import transactions from '../../template/transactions.json';
import transformDate from '../../utils/transformDate';
import icons from '../../images/icons.svg';

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

  // const tableData =

  // const dispatch = useDispatch();
  // const transactions = useSelector(transactionSelectors.getTransactionsData);

  // useEffect(() => {
  //   dispatch(transactionOperations.getTransactions());
  // }, [dispatch]);

  // const handleDeleteTransaction = id => {
  //   //transactions to delete id
  //   dispatch(transactionOperations.deleteTransaction(id));
  //   //get updated transactions
  //   dispatch(transactionOperations.getTransactions());
  //   return;
  // };

  //фильтр по дате
  // const [selected, setSelected] = useState({ day: '', month: '', year: '' });

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
              {transactions &&
                transactions.map(
                  ({ _id, completedAt, description, category, amount }) => (
                    <TableRow key={_id}>
                      <TableCell>{transformDate(completedAt)}</TableCell>
                      <TableCell>{description}</TableCell>
                      <TableCell>
                        {categories.entities[category].name}
                      </TableCell>
                      <TableCell>{amount}.00 грн.</TableCell>
                      <TableCell>
                        <BtnDelete
                          type="button"
                          // onClick={handleDeleteTransaction(_id)}
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
