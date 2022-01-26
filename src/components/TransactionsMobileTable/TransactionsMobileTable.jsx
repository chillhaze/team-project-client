import {
  Wrapper,
  BtnDelete,
  TableStyled,
  TableBodyStyled,
  TableCellStyled,
  TableContainerStyled,
  CellWrapper,
  CellItem,
  Description,
  Date,
  Category,
  Amount,
  AmountData,
} from './TransactionsMobileTable.styled';
import * as React from 'react';
import { useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import * as transactionOperations from '../../redux/transactions/transactions-operations';
import * as transactionSelectors from '../../redux/transactions/transactions-selectors';
import { getCategories } from '../../redux/categories/categories-selectors';
import transformDate from '../../utils/transformDate';
import icons from '../../images/icons.svg';
import {
  getType,
  getPeriod,
} from '../../redux/transactions/transactions-selectors';

const TransactionsMobileTable = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          background: {
            default: '#F5F6FB',
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
  const allCategories = useSelector(getCategories);
  const period = useSelector(getPeriod);

  useEffect(() => {
    dispatch(transactionOperations.getTransactions({ type, period }));
  }, [dispatch, period, type]);

  const handleDeleteTransaction = id => {
    dispatch(transactionOperations.deleteTransaction(id));
    return;
  };

  const tableList = [
    ...transactions,
    ...new Array(20 - transactions.length).fill(null),
  ];

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <TableContainerStyled component={Paper}>
          <TableStyled aria-label="simple table" stickyHeader>
            <TableBodyStyled>
              {tableList.length !== 0 &&
                tableList.map((elem, i) => {
                  if (!elem) {
                    return (
                      <TableRow key={i}>
                        {/* <TableCellStyled></TableCellStyled>
                        <TableCellStyled></TableCellStyled>
                        <TableCellStyled></TableCellStyled>
                        <TableCellStyled></TableCellStyled>
                        <TableCellStyled></TableCellStyled> */}
                      </TableRow>
                    );
                  }
                  return (
                    <TableRow key={i}>
                      <TableCellStyled>
                        <CellWrapper>
                          <CellItem>
                            <Description>{elem.description}</Description>
                            <Date>{transformDate(elem.completedAt)}</Date>
                          </CellItem>

                          <Category>
                            {allCategories.length !== 0 &&
                              allCategories.find(el => {
                                return el._id === elem.category;
                              }).name}
                          </Category>
                        </CellWrapper>
                        <CellWrapper>
                          <Amount>
                            <AmountData>
                              {type === 'credit' ? '-' : ''}
                              {elem.amount}.00 грн.
                            </AmountData>
                          </Amount>
                          <BtnDelete
                            type="button"
                            onClick={() => handleDeleteTransaction(elem._id)}
                          >
                            <svg width="14.7px" height="18px">
                              <use href={icons + '#icon-delete'}></use>
                            </svg>
                          </BtnDelete>
                        </CellWrapper>
                      </TableCellStyled>
                    </TableRow>
                  );
                })}
            </TableBodyStyled>
          </TableStyled>
        </TableContainerStyled>
      </ThemeProvider>
    </Wrapper>
  );
};

export default TransactionsMobileTable;
