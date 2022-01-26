import { Wrapper } from './Income.styled';
import DataInput from '../../components/DataInput/DataInput';
import TransactionsTable from '../../components/TransactionsTable/TransactionsTable';
import Summary from '../../components/Summary/Summary';
import Transactions from 'components/Transactions/Transactions';

const Income = () => {
  return (
    <Wrapper>
      <Transactions />
    </Wrapper>
  );
};

export default Income;
