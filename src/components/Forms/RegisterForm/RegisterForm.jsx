import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../redux/auth/auth-operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'yup-phone';
import { FcGoogle } from 'react-icons/fc';
import { FiEyeOff } from 'react-icons/fi';
import ButtonBlock from '../../ButtonBlock/ButtonBlock';


import { Wrap, TextWrap, Text,Text1, GoogleBtn, Label, Label1, Errors, Field, FieldWrap, Eye, Span } from './RegisterForm.styled';


const registerSchema = Yup.object().shape({
  username: Yup.string().max(50, 'Too Long').required('Required'),
  email: Yup.string().email().required('Valid mail required'),
  password: Yup.string()
    .min(6, 'Password is short - should be at least 6 chars')
    .required('Required'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = newUser => console.log(dispatch(signUp(newUser)));
  

  const onLoginBtnClick = () => navigate('/login');
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Wrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextWrap>
          <Text>
            Вы можете авторизоваться с помощью <br /> <Span>Google Account:</Span>
          </Text>
          <GoogleBtn
            // href="https://project.herokuapp.com/auth/google"//нужна ссылка на бекенд
            
          >
            <FcGoogle size={18} />
            Google
          </GoogleBtn>
        </TextWrap>
        <TextWrap>
          <Text1>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </Text1>
          <div>
            <Label>
              {errors.username && <Errors> * </Errors>} Имя:
            </Label>
            <Field {...register('username')} placeholder=" your name" />
            {errors.username && (
              <Errors>{errors.username.message}</Errors>
            )}
          </div>
          <div>
            <Label>
              {errors.email && <Errors> * </Errors>}
              Электронная почта:
            </Label>
             <Field type="email" {...register('email')} placeholder="your@email.com"/>
            {errors.email && <Errors>{errors.email.message}</Errors>}
          </div>
          <FieldWrap>
            <Label1>
              {errors.password && <Errors> * </Errors>} Пароль:
            {/* </Label> */}
            <Field  type={passwordShown ? "text" : "password"}
              {...register('password')}
              placeholder="your password" />
            {errors.password && (
              <Errors>{errors.password.message}</Errors>
              )}
              <Eye onClick={togglePasswordVisiblity}><FiEyeOff /></Eye>
           </Label1>
          </FieldWrap>
          <ButtonBlock
            firstButtonText={'Войти'}
            secondButtonText={'Регистрация'}
            firstButtonHandler={onLoginBtnClick}
            firstButtonType={'button'}
            secondButtonType={'submit'}
          ></ButtonBlock>
        </TextWrap>
      </form>
    </Wrap>
  );
}


//////////////////////////////////////////////////////////////










// import React, { Fragment, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { FcGoogle } from 'react-icons/fc';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import * as authOperations from '../../../redux/auth/auth-operations';

// import { AuthGoogleDescription } from './RegisterForm.styled';
// import { OtherDescriptionToSignUp } from './RegisterForm.styled';

// import { SignInFormWrapper } from './RegisterForm.styled';
// import { LabelInputForm } from './RegisterForm.styled';
// import { FormInputDescription } from './RegisterForm.styled';
// import { FormInput } from './RegisterForm.styled';
// import { FormBtn } from './RegisterForm.styled';
// import { SpanTextWrapper, AuthGoogleBtn } from './RegisterForm.styled';


// export default function AuthForm() {
//     const dispatch = useDispatch();
//     const [isRegistration, setRegistration] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // let schemaMail = Yup.string().email();
//     // let result = schemaMail.isValidSync("test@test.com"); // isValidSync returns boolean
//     // console.log(result);

//     const handleChange = e => {
//         const { name, value } = e.currentTarget;
//         switch (name) {
//             case 'name':
//                 setName(value);
//                 break;
//             case 'email':
//                 setEmail(value);
//                 break;
//             case 'password':
//                 setPassword(value);
//                 break;

//             default:
//                 return;
//         }
//     };

//     const handleChangeForm = e => {
//         e.preventDefault();
//         setRegistration(!isRegistration);
//     };

//     const resetInputs = () => {
//         setEmail('');
//         setPassword('');
//         setName('');
//     };

//     const OnSubmitRegBtn = evt => {
//         evt.preventDefault();
//         if (!name || !email || !password) {
//             toast.info('Fill in all the fields');
//             return;
//         }
//         dispatch(authOperations.signUp({ name, email, password }));
//         resetInputs();
//     };

//     const OnSubmitSignInBtn = evt => {
//         evt.preventDefault();
//         if (!email || !password) {
//             toast.info('Fill in all the fields');
//             return;
//         }
//         dispatch(authOperations.signIn({ email, password }));
//         resetInputs();
//     };

//     return (
//         <Fragment>
//             <AuthGoogleDescription>
//                 Вы можете авторизоваться с помощью Google Account:
//             </AuthGoogleDescription>
//             <a
//                 href="https://kapusta-finance-tracker.herokuapp.com/api/user/google"
//                 alt="GoogleAuth"
//             >
//                 <AuthGoogleBtn type="button">
//                     <FcGoogle size={18} />
//                     <SpanTextWrapper>Google</SpanTextWrapper>
//                 </AuthGoogleBtn>
//             </a>

//             <OtherDescriptionToSignUp>
//                 Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
//             </OtherDescriptionToSignUp>
//             <SignInFormWrapper
//                 //   onSubmit={handleSubmit}
//                 action=""
//                 autoComplete="on"
//             >
//                 {isRegistration ? (
//                     <LabelInputForm>
//                         <FormInputDescription>Введите имя:</FormInputDescription>
//                         <FormInput
//                             //   onBlur={blurHandler}
//                             placeholder={'Barry Donatello'}
//                             type="name"
//                             name="name"
//                             onChange={handleChange}
//                             value={name}
//                             required
//                         />
//                     </LabelInputForm>
//                 ) : null}

//                 <LabelInputForm>
//                     <FormInputDescription>Электронная почта:</FormInputDescription>
//                     <FormInput
//                         // onBlur={blurHandler}
//                         placeholder={'your@email.com'}
//                         type="email"
//                         name="email"
//                         onChange={handleChange}
//                         value={email}
//                         required
//                     />
//                 </LabelInputForm>

//                 <LabelInputForm marginBTM>
//                     <FormInputDescription>Пароль:</FormInputDescription>
//                     <FormInput
//                         placeholder={'········'}
//                         type="password"
//                         name="password"
//                         onChange={handleChange}
//                         value={password}
//                         required
//                     />
//                 </LabelInputForm>

//                 {isRegistration ? (
//                     <Fragment>
//                         <FormBtn type="button" marginRigth15 onClick={handleChangeForm}>
//                             Войти
//                         </FormBtn>
//                         <FormBtn type="submit" submitBtn onClick={OnSubmitRegBtn}>
//                             Регистрация
//                         </FormBtn>
//                     </Fragment>
//                 ) : (
//                     <Fragment>
//                         <FormBtn type="submit" marginRigth15 submitBtn onClick={OnSubmitSignInBtn}>
//                             Войти
//                         </FormBtn>
//                         <FormBtn type="button" onClick={handleChangeForm}>
//                             Регистрация
//                         </FormBtn>
//                     </Fragment>
//                 )}
//             </SignInFormWrapper>
//         </Fragment>
//     );
// }