import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import { Wrapper } from './Finance.styled';
import Income from '../Income/Income';

const Finance = () => {
  return (
    <Wrapper>
      Finance
      <Income />
      <Ballance />
      <Outlet />
    </Wrapper>
  );
};

export default Finance;
