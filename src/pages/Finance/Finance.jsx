import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import { Wrapper } from './Finance.styled';

const Finance = () => {
  return (
    <Wrapper>
      Finance
      <Ballance />
      <Outlet />
    </Wrapper>
  );
};

export default Finance;
