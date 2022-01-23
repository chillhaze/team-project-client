import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { googleAuth } from 'redux/auth/auth-slice';

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const token = searchParams.get('token');
  console.log(token);
  useEffect(() => {
    if (token) {
      console.log('token in dispatch', token);
      dispatch(googleAuth({ token }));
    }
  }, [token]);
  return (
    <div>
      <Loader />
    </div>
  );
}
