import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import Transactions from '../../components/Transactions/Transactions';
import { Wrapper } from './Finance.styled';
import { getCategories } from '../../redux/categories/categories-operations';

const Finanse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Wrapper>
      <Ballance />
      <Transactions />
      {/* <Outlet /> */}
    </Wrapper>
  );
};

export default Finanse;
