import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Finance from '../../pages/Finance/Finance';
import Expences from '../../pages/Expences/Expences';
import Income from '../../pages/Income/Income';
import Reports from '../../pages/Reports/Reports';
import { Background, Header, Wrapper } from './App.styled';

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;

  return (
    <Wrapper>
      <Header>
        <Navbar />
      </Header>
      <Background />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {isLoggedIn && (
          <>
            <Route path="/" exact element={<Finance />}>
              <Route path="/expenses" exact element={<Expences />} />
              <Route path="/income" exact element={<Income />} />
            </Route>
            <Route path="/reports" exact element={<Reports />} />
          </>
        )}

        {/* any route below*/}
        <Route path="*" element={<Navigate replace to={'/'} />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
