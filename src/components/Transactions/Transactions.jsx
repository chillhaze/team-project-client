import { Wrapper, TabletForm, Thumb } from './Transactions.styled';
import DataInput from 'components/DataInput/DataInput';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import Calendar from '../Calendar/Calendar';
import Summary from '../Summary/Summary';
import SwitchBtns from '../SwitchBtns/SwitchBtns';
import { useMediaQuery } from 'react-responsive';
import TransactionsMobileTable from 'components/TransactionsMobileTable/TransactionsMobileTable';

const Transactions = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && <SwitchBtns />}
      <TabletForm isMobile={isMobile}>
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
