import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import { Wrapper } from './Finance.styled';

const Finanse = () => {
  return (
    <Wrapper>
      <Ballance />
      <Outlet />
    </Wrapper>
  );
};

export default Finanse;
