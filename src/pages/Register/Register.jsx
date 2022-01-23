import React from 'react';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import { TitleWrapper, Title, TitleSpan, SubTitle } from './Register.styled';
import {Wrapper} from '../../pages/Login/Login.styled'

export default function Register () {
  return ( <Wrapper>
    <TitleWrapper>
        <Title>
          Kapu<TitleSpan>$</TitleSpan>ta
        </Title>
        <SubTitle>Smart Finance</SubTitle>
      </TitleWrapper>

    <RegisterForm />
  </Wrapper>);
};


