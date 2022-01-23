import { Wrapper } from './Expences.styled';
import DataInput from '../../components/DataInput/DataInput';
import TransactionsTable from '../../components/TransactionsTable/TransactionsTable';

const Expences = () => {
  return (
    <Wrapper>
      <DataInput />
      <TransactionsTable />
      {/* СВОДКА - добавляем компонент сюда */}
    </Wrapper>
  );
};

export default Expences;
