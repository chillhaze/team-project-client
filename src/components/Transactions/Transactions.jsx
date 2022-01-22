import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper } from './Transactions.styled';
import DataInput from 'components/DataInput/DataInput';
import TransactionsTable from 'components/Table/Table';
import { setType } from '../../redux/transactions/transactions-slice';

const EXPENCES_TYPE = 'credit';
const INCOME_TYPE = 'debit';
const INCOMES_PAGE = 'Доход';

const Transactions = () => {
  const [period, setPeriod] = useState(new Date('02.01.2022'));
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(
      setType(
        e.target.textContent === INCOMES_PAGE ? INCOME_TYPE : EXPENCES_TYPE,
      ),
    );
  };

  return (
    <Wrapper>
      <button type="button" onClick={handleClick}>
        Расход
      </button>
      <button type="button" onClick={handleClick}>
        Доход
      </button>
      <div>
        <DataInput
          handlePeriodChange={value => {
            setPeriod(value);
          }}
        />
        <TransactionsTable period={period.toISOString()} />
      </div>
    </Wrapper>
  );
};

export default Transactions;
