import React from 'react';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import { TitleWrapper, Title, TitleSpan, SubTitle } from './Register.styled';
import { Wrapper } from './Register.styled';
import StartPageWrapper from 'components/Wrappers/StartPageWrapper';
// import { CabbageBottom } from 'components/Wrappers/styled/StartPageWrapper.styled';

export default function Register () {
  return (
    <StartPageWrapper>
      <Wrapper>
    <TitleWrapper>
        <Title>
          Kapu<TitleSpan>$</TitleSpan>ta
        </Title>
        <SubTitle>Smart Finance</SubTitle>
      </TitleWrapper>

    <RegisterForm />
      </Wrapper>
      </StartPageWrapper>
  );
};


