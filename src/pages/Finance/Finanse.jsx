import PageWrapper from 'components/Wrappers/PageWrapper';
import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import Transactions from '../../components/Transactions/Transactions';
import { Wrapper } from './Finance.styled';

const Finanse = () => {
  return (
    <PageWrapper>
    <Wrapper>
      <Ballance />
      <Transactions />
      {/* <Outlet /> */}
      </Wrapper>
      </PageWrapper>
  );
};

export default Finanse;
