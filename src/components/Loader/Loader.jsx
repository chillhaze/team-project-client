import React from 'react';
import icons from '../../images/icons.svg';
import { StyledLoader } from './Loader.styled';

export default function Loader() {
  return (
    <StyledLoader width="100" height="100">
      <use href={icons + '#icon-loader'}> </use>

      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        begin="0s"
        dur="1.3s"
        repeatCount="indefinite"
      />
    </StyledLoader>
  );
}
