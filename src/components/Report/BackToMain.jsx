import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import icons from '../../images/icons.svg';
import { BackBtn } from '../Report/styled/BackToMain.styled';

export default function BackToMain() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const navigate = useNavigate();

  return (
    <BackBtn onClick={() => navigate('/expenses')} type="button">
      <svg width="24px" height="24px">
        <use href={icons + '#icon-back'}> </use>
      </svg>
      {!isMobile && 'Назад на главную'}
    </BackBtn>
  );
}
