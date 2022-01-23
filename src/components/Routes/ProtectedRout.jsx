import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRout() {
  const isAuth = useSelector(state => state.auth.isUserLoggedIn);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
