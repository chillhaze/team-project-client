import React, { useEffect, useState } from 'react';
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

  // Для проверки подтверждено ли дейтсвие в модалке
  const isConfirmed = useSelector(state => state.confirm.isConfirmed);

  const user = useSelector(({ auth }) => auth.user);

  // Для проверки на тип текущей операции
  const [isLogoutOperation, setIsLogoutOperation] = useState(false);

  // Будет функция на выход, пока для теста алерт
  useEffect(() => {
    if (isConfirmed && isLogoutOperation) {
      alert('ВЫ ВЫШЛИ ИЗ АККАУНТА (test)');
      dispatch(confirmAction(false));
      setIsLogoutOperation(false);
    }
  }, [isConfirmed, isLogoutOperation]);

  // Открытие модалки и изменения флагов для запуска useEffect и отправки данных
  const handlerOnClik = () => {
    setIsLogoutOperation(true);
    dispatch(isLogOut(true));
    dispatch(openModal());
  };
  return (
    <LoggedContainer>
      <svg width="32px" height="32px">
        <use href={icons + '#icon-user'}> </use>
      </svg>

      {!isMobile && <UserName>{user.name}</UserName>}

      <ExitBtn type="button" name="logout" onClick={handlerOnClik}>
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
