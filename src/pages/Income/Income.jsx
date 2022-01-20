import { Wrapper } from './Income.styled';
import DataInput from '../../components/DataInput/DataInput';
import TransactionsTable from '../../components/Table/Table';
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
