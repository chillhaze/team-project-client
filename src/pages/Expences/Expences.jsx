import { Wrapper } from './Expences.styled';
import DataInput from '../../components/DataInput/DataInput';
import Summary from 'components/Summary/Summary';
import Transactions from 'components/Transactions/Transactions';

const Expences = () => {
  return (
    <Wrapper>
      <Transactions />
    </Wrapper>
  );
};

export default Expences;
