import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import Navbar from '../Navbar/Navbar';
import { Header, Wrapper } from './App.styled';
import { ModalPortal } from 'components/LogoutModal/Modal';
import { ToastContainer } from 'react-toastify';
import GoogleAuth from 'components/GoogleAuth/GoogleAuth';

import Loader from 'components/Loader/Loader';
import Finance from 'pages/Finance/Finance';
import { useMediaQuery } from 'react-responsive';

const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Expences = lazy(() => import('../../pages/Expences/Expences'));
const Income = lazy(() => import('../../pages/Income/Income'));
const Reports = lazy(() => import('../../pages/Reports/Reports'));

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  // Проверка залогинен или нет, для редиректа на правильный раут
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []);

  const isAuth = useSelector(state => state.auth.isUserLoggedIn);

  useEffect(() => {
    if (isAuth && isMobile) {
      navigate('/finance');
    } else if (isAuth) {
      navigate('/finance/expenses');
    }
  }, [isAuth]);

  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header>
        <Navbar />
      </Header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/finance" exact element={<Finance />}>
            <Route path="/finance/expenses" element={<Expences />} />
            <Route path="/finance/income" element={<Income />} />
          </Route>

          <Route path="/reports" exact element={<Reports />} />
          <Route path="/redirect" element={<GoogleAuth />} />

          {/* any route below*/}
          <Route path="*" element={<Navigate replace to={'/login'} />} />
        </Routes>
      </Suspense>

      <ModalPortal />
    </Wrapper>
  );
}

export default App;
