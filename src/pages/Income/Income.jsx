import { Wrapper } from './Income.styled';
import DataInput from '../../components/DataInput/DataInput';
import TransactionsTable from '../../components/Table/Table';

const Income = () => {
  return (
    <Wrapper>
      <DataInput />
      <TransactionsTable />
      {/* СВОДКА - добавляем компонент сюда */}
    </Wrapper>
  );
};

export default Income;
