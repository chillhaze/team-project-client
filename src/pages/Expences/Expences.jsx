import { Wrapper } from './Expences.styled';
import { useEffect } from 'react';
import Ballance from 'components/Ballance/Ballance';
import Transactions from 'components/Transactions/Transactions';
import PageWrapper from 'components/Wrappers/PageWrapper';
import { getCategories } from '../../redux/categories/categories-operations';
import { useDispatch } from 'react-redux';

const Expences = () => {
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
        {/* СВОДКА - добавляем компонент сюда */}
      </Wrapper>
    </PageWrapper>
  );
};

export default Expences;
