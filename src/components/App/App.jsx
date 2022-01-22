import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Transactions from '../../components/Transactions/Transactions';
import Expences from '../../pages/Expences/Expences';
import Income from '../../pages/Income/Income';
import Reports from '../../pages/Reports/Reports';
import Finanse from '../../pages/Finance/Finanse';
import { Header, Wrapper } from './App.styled';
import { ModalPortal } from 'components/LogoutModal/Modal';
import { ToastContainer } from 'react-toastify';

function App() {
  // Проверка залогинен или нет, для редиректа на правильный раут
  const isUserLoggedIn = useSelector(authSelectors.isUserLoggedIn);
  const navigate = useNavigate();

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
      {/* <Transactions /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isUserLoggedIn && (
          <>
            <Route path="/" exact element={<Finanse />}>
              <Route path="/expenses" exact element={<Expences />} />
              <Route path="/income" exact element={<Income />} />
            </Route>
            <Route path="/reports" exact element={<Reports />} />
          </>
        )}

        {/* any route below*/}
        <Route path="*" element={<Navigate replace to={'/'} />} />
      </Routes>
      <ModalPortal />
    </Wrapper>
  );
}

export default App;
