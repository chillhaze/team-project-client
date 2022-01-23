import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import Transactions from '../../components/Transactions/Transactions';
import { Wrapper } from './Finance.styled';

const Finanse = () => {
  return (
    <Wrapper>
      <Ballance />
      <Transactions />
      {/* <Outlet /> */}
    </Wrapper>
  );
};

export default Finanse;
