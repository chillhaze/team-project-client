import React from 'react';
import { NavLink } from 'react-router-dom';
import icons from '../../images/icons.svg';

export default function Logo() {
  return (
    <NavLink to={'/expenses'}>
      <svg width="90" height="31">
        <use href={icons + '#icon-logo'}> </use>
      </svg>
    </NavLink>
  );
}
