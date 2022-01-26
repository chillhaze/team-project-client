import { Wrapper, TabletForm, Thumb } from './Transactions.styled';
import DataInput from 'components/DataInput/DataInput';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import Calendar from '../Calendar/Calendar';
import Summary from '../Summary/Summary';
import SwitchBtns from '../SwitchBtns/SwitchBtns';
import { useMediaQuery } from 'react-responsive';
import { setType } from '../../redux/transactions/transactions-slice';

const EXPENCES_TYPE = 'credit';
const INCOME_TYPE = 'debit';
const INCOMES_PAGE = 'Доход';


const Transactions = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && <SwitchBtns />}
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
