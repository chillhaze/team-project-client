import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import Navbar from '../Navbar/Navbar';
import { Header, Wrapper } from './App.styled';
import { ModalPortal } from 'components/LogoutModal/Modal';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Transactions = lazy(() => import('../../pages/Finance/Finanse'));
const Expences = lazy(() => import('../../pages/Expences/Expences'));
const Income = lazy(() => import('../../pages/Income/Income'));
const Reports = lazy(() => import('../../pages/Reports/Reports'));

function App() {
  // Проверка залогинен или нет, для редиректа на правильный раут
  const isUserLoggedIn = useSelector(authSelectors.isUserLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []);

  useEffect(() => {
    isUserLoggedIn ? navigate('/expenses') : navigate('/login');
  }, [isUserLoggedIn]);

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
          {isUserLoggedIn && (
            <>
              <Route path="/" exact element={<Transactions />}>
                <Route path="/expenses" exact element={<Expences />} />
                <Route path="/income" exact element={<Income />} />
              </Route>
              <Route path="/reports" exact element={<Reports />} />
            </>
          )}

          {/* any route below*/}
          <Route path="*" element={<Navigate replace to={'/'} />} />
        </Routes>
      </Suspense>
      <ModalPortal />
    </Wrapper>
  );
}

export default App;
