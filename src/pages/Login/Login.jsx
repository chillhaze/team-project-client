import React from 'react';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import { Wrapper, TitleWrapper, Title, TitleSpan, SubTitle, CabbageBottom, Cabbage } from './Login.styled';

export default function Login () {
  return ( <Wrapper>
    <TitleWrapper>
        <Title>
          Kapu<TitleSpan>$</TitleSpan>ta
        </Title>
        <SubTitle>Smart Finance</SubTitle>
      </TitleWrapper>
    <CabbageBottom />
    <Cabbage/>
    <LoginForm />
  </Wrapper>);
};