import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import { Wrapper } from './Finance.styled';

const Transactions = () => {
  return (
    <Wrapper>
      <Ballance />
      <Outlet />
    </Wrapper>
  );
};

export default Transactions;
