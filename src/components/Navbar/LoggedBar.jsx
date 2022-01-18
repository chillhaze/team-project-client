import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import { useMediaQuery } from 'react-responsive';
import { ExitBtn, LoggedContainer, UserName } from './styled/LoggedBar.styled';
import {
  openModal,
  confirmAction,
  isLogOut,
} from 'redux/confirming/confirm-slice';

export default function LoggedBar() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const userName = useSelector(({ auth }) => auth.user.name);

  const handlerOnClik = () => {
    dispatch(isLogOut(true));
    dispatch(openModal());
  };
  return (
    <LoggedContainer>
      <svg width="32px" height="32px">
        <use href={icons + '#icon-user'}> </use>
      </svg>

      {!isMobile && <UserName>{userName}</UserName>}

      <ExitBtn type="button" name="logout" onClick={handlerOnClik}>
        {' '}
        {isMobile ? (
          <svg width="16px" height="16px">
            <use href={icons + '#icon-logout'}> </use>
          </svg>
        ) : (
          'Выйти'
        )}
      </ExitBtn>
    </LoggedContainer>
  );
}
