import { useDispatch } from 'react-redux';
import {
  Wrapper,
  TabletForm,
  ButtonsWrapper,
  BtnExpences,
  BtnIncome,
  Thumb,
} from './Transactions.styled';
import DataInput from 'components/DataInput/DataInput';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import Calendar from '../Calendar/Calendar';
import Summary from '../Summary/Summary';
import { setType } from '../../redux/transactions/transactions-slice';

const EXPENCES_TYPE = 'credit';
const INCOME_TYPE = 'debit';
const INCOMES_PAGE = 'Доход';

const Transactions = () => {
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
      <ButtonsWrapper>
        <BtnExpences type="button" onClick={handleClick}>
          Расход
        </BtnExpences>
        <BtnIncome type="button" onClick={handleClick}>
          Доход
        </BtnIncome>
      </ButtonsWrapper>
      <TabletForm>
        <Calendar />
        <DataInput />
      </TabletForm>
      <Thumb>
        <TransactionsTable />
        <Summary />
      </Thumb>
    </Wrapper>
  );
};

export default Transactions;
