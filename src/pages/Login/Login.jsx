import React from 'react';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import { Wrapper, TitleWrapper, Title, TitleSpan, SubTitle } from './Login.styled';

// const Register = () => {
//   return <Wrapper>
//     <TitleWrapper>
//         <Title>
//           Kapu<TitleSpan>$</TitleSpan>ta
//         </Title>
//         <SubTitle>Smart Finance</SubTitle>
//       </TitleWrapper>

//     {/* <RegisterForm /> */}
//   </Wrapper>;
// };

// export default Register;

export default function Register () {
  return ( <Wrapper>
    <TitleWrapper>
        <Title>
          Kapu<TitleSpan>$</TitleSpan>ta
        </Title>
        <SubTitle>Smart Finance</SubTitle>
      </TitleWrapper>

    <LoginForm />
  </Wrapper>);
};