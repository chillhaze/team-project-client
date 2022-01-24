import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import DataInput from '../../components/Transactions/Transactions';
import { Wrapper } from './Finance.styled';
import { getCategories } from '../../redux/categories/categories-operations';

const MobileFinanse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Wrapper>
      <DataInput />
      {/* <Outlet /> */}
    </Wrapper>
  );
};

export default MobileFinanse;
