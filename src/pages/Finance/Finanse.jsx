import PageWrapper from 'components/Wrappers/PageWrapper';
import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import Transactions from '../../components/Transactions/Transactions';
import { Wrapper } from './Finance.styled';
import { getCategories } from '../../redux/categories/categories-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Finanse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
