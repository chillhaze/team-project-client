import { Wrapper } from './Income.styled';
import DataInput from '../../components/DataInput/DataInput';
import TransactionsTable from '../../components/TransactionsTable/TransactionsTable';
import Summary from '../../components/Summary/Summary';

const Income = () => {
  return (
    <Wrapper>
      <DataInput />
      <TransactionsTable />
      <Summary />
    </Wrapper>
  );
};

export default Income;
