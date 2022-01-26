import PageWrapper from 'components/Wrappers/PageWrapper';
import { useLocation } from 'react-router-dom';
import Ballance from '../../components/Ballance/Ballance';
import { Wrapper } from './Finance.styled';
import { getCategories } from '../../redux/categories/categories-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProtectedRout from 'components/Routes/ProtectedRout';
import { useMediaQuery } from 'react-responsive';
import SwitchBtns from '../../components/SwitchBtns/SwitchBtns';
import TransactionsMobileTable from 'components/TransactionsMobileTable/TransactionsMobileTable';
import BackToMain from 'components/Report/BackToMain';

const Finance = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <PageWrapper isMobile={isMobile}>
      <Wrapper isMobile={isMobile}>
        {location.pathname !== '/finance' &&
          location.pathname !== '/reports' &&
          isMobile && <BackToMain />}

        {!isMobile && <Ballance />}

        {location.pathname === '/finance' && isMobile && <Ballance />}

        {/* {location.pathname === '/finance' && isMobile && (
          <TransactionsMobileTable />
        )} */}
        <ProtectedRout />
        {isMobile && <SwitchBtns />}
      </Wrapper>
    </PageWrapper>
  );
};

export default Finance;
