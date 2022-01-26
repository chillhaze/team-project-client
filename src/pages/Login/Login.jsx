import React from 'react';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import {
  Wrapper,
  TitleWrapper,
  Title,
  TitleSpan,
  SubTitle,
} from './Login.styled';
import StartPageWrapper from '../../components/Wrappers/StartPageWrapper.jsx';

export default function Login() {
  return (
    <StartPageWrapper>
      <Wrapper>
        <TitleWrapper>
          <Title>
            Kapu<TitleSpan>$</TitleSpan>ta
          </Title>
          <SubTitle>Smart Finance</SubTitle>
        </TitleWrapper>
        <LoginForm />
      </Wrapper>
    </StartPageWrapper>
  );
}
