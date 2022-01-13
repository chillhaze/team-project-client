import React from 'react';
import { useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import { useMediaQuery } from 'react-responsive';
import { ExitBtn, LoggedContainer, UserName } from './styled/LoggedBar.styled';

export default function LoggedBar() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  console.log(isMobile);


  const userName = useSelector(({ auth }) => auth.user.name);
  return (
    <LoggedContainer>

      <svg width="32px" height="32px">
        <use href={icons + '#icon-user'}> </use>
      </svg>

      {!isMobile && <UserName>{userName}</UserName>}

      <ExitBtn type="button">
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
