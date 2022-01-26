import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Wrapper } from '../Wrappers/styled/PageWrapper.styled';

export default function PageWrapper(props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return <Wrapper isMobile={isMobile}>{props.children}</Wrapper>;
}
