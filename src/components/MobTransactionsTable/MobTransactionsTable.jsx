import {
  Wrapper,
  BtnDelete,
  TableStyled,
  TableHeadStyled,
  TableBodyStyled,
  TableCellStyled,
  TableCellDate,
  TableCellDesc,
  TableCellCategory,
  TableCellAmount,
  TableContainerStyled,
  MobDiv,
} from './TransactionsTable.styled';
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
import { useMediaQuery } from 'react-responsive';

const TransactionsTable = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
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
        <TableContainerStyled
          component={Paper}
          sx={{ border: '2px solid #F5F6FB', boxShadow: 'none' }}
        >
          <TableStyled
            aria-label="simple table"
            stickyHeader
            sx={{ borderColor: '#F5F6FB' }}
          >
            <TableHeadStyled sx={{ paddingLeft: '20px' }}>
              <TableRow>
                <TableCellStyled
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    lineHeight: '1.67',
                    letterSpacing: '0.02em',
                    border: '2px solid #F5F6FB',
                  }}
                >
                  дата
                </TableCellStyled>
                <TableCellStyled
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '12px',
                    lineHeight: '1.67',
                    letterSpacing: '0.02em',
                    border: '2px solid #F5F6FB',
                  }}
                >
                  описание
                </TableCellStyled>
                <TableCellStyled
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '12px',
                    lineHeight: '1.67',
                    letterSpacing: '0.02em',
                    border: '2px solid #F5F6FB',
                  }}
                >
                  категория
                </TableCellStyled>
                <TableCellStyled
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    lineHeight: '1.67',
                    letterSpacing: '0.02em',
                    border: '2px solid #F5F6FB',
                  }}
                >
                  сумма
                </TableCellStyled>
              </TableRow>
            </TableHeadStyled>

            <TableBodyStyled>
              {tableList.length !== 0 &&
                tableList.map((elem, i) => {
                  if (!elem) {
                    return (
                      <TableRow key={i}>
                        <TableCellStyled
                          sx={{ borderBottom: '2px solid #F5F6FB' }}
                        ></TableCellStyled>
                        <TableCellStyled
                          sx={{ borderBottom: '2px solid #F5F6FB' }}
                        ></TableCellStyled>
                        <TableCellStyled
                          sx={{ borderBottom: '2px solid #F5F6FB' }}
                        ></TableCellStyled>
                        <TableCellStyled
                          sx={{ borderBottom: '2px solid #F5F6FB' }}
                        ></TableCellStyled>
                      </TableRow>
                    );
                  }
                  return (
                    <TableRow key={i}>
                      <MobDiv>
                        <TableCellDate
                          sx={{
                            color: '#52555F',
                            borderBottom: '2px solid #F5F6FB',
                          }}
                        >
                          {transformDate(elem.completedAt)}
                        </TableCellDate>
                        <TableCellDesc
                          sx={{
                            color: '#52555F',
                            borderBottom: '2px solid #F5F6FB',
                          }}
                        >
                          {elem.description}
                        </TableCellDesc>
                      </MobDiv>
                      <TableCellCategory
                        sx={{
                          color: '#52555F',
                          borderBottom: '2px solid #F5F6FB',
                        }}
                      >
                        {allCategories.length !== 0 &&
                          allCategories.find(el => {
                            return el._id === elem.category;
                          }).name}
                      </TableCellCategory>
                      <TableCellAmount
                        sx={{
                          color: '#52555F',
                          borderBottom: '2px solid #F5F6FB',
                        }}
                      >
                        {type === 'debit' && (
                          <span style={{ color: 'green' }}>
                            {elem.amount} грн.
                          </span>
                        )}
                        {type === 'credit' && (
                          <span style={{ color: 'red' }}>
                            -{elem.amount} грн.
                          </span>
                        )}

                        <BtnDelete
                          type="button"
                          onClick={() => handleDeleteTransaction(elem._id)}
                        >
                          <svg width="16px" height="19px">
                            <use href={icons + '#icon-delete'}></use>
                          </svg>
                        </BtnDelete>
                      </TableCellAmount>
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

export default TransactionsTable;
