import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import icons from '../../images/icons.svg';

export default function Logo() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <NavLink to={isMobile ? '/finance' : '/finance/expenses'}>
      <svg width="90" height="31">
        <use href={icons + '#icon-logo'}> </use>
      </svg>
    </NavLink>
  );
}
