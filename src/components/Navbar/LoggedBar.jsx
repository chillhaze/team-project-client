import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import { useMediaQuery } from 'react-responsive';
import { ExitBtn, LoggedContainer, UserName } from './styled/LoggedBar.styled';
import Modal from 'components/LogoutModal/LogoutModal';

export default function LoggedBar() {
  const [openModal, setOpenModal] = useState(false);
  const [buttonName, setButtonName] = useState('');
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const onClickHandler = (e) => {
    const name = e.target.name
    setOpenModal(true);
    setButtonName(name)
  
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const userName = useSelector(({ auth }) => auth.user.name);
  return (
    <LoggedContainer>
      <svg width="32px" height="32px">
        <use href={icons + '#icon-user'}> </use>
      </svg>

      {!isMobile && <UserName>{userName}</UserName>}

      <ExitBtn type="button" name="logout" onClick={onClickHandler}>
        {' '}
        {isMobile ? (
          <svg width="16px" height="16px">
            <use href={icons + '#icon-logout'}> </use>
          </svg>
        ) : (
          'Выйти'
        )}
      </ExitBtn>
      {openModal && <Modal onAction={modalClose} value={buttonName} />}
    </LoggedContainer>
  );
}
