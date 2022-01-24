import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/auth/auth-operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'yup-phone';
import { FcGoogle } from 'react-icons/fc';
import { FiEyeOff } from 'react-icons/fi';
import ButtonBlock from '../../ButtonBlock/ButtonBlock';
import {
  Wrap,
  TextWrap,
  Text,
  Text1,
  GoogleBtn,
  Label,
  Label1,
  Errors,
  Field,
  FieldWrap,
  Eye,
  Span,
} from './RegisterForm.styled';

const registerSchema = Yup.object().shape({
  name: Yup.string().max(30, 'Слишком длинный').required('Обязательно'),
  email: Yup.string()
    .email()
    .required('Требуется действительный адрес электронной почты'),
  password: Yup.string()
    .min(6, 'Пароль короткий - должен быть не менее 6 символов')
    .required('Обязательно'),
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

  const onSubmit = newUser => {
    dispatch(registerUser(newUser));
    navigate('/login');
  };

  const onLoginBtnClick = () => navigate('/login');
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Wrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextWrap>
          <Text>
            Вы можете авторизоваться с помощью <br />{' '}
            <Span>Google Account:</Span>
          </Text>
          <GoogleBtn href="https://kapusta-app-teamproject.herokuapp.com/api/auth/google">
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
            <Label>{errors.name && <Errors> * </Errors>} Имя:</Label>
            <Field {...register('name')} placeholder=" your name" />
            {errors.name && <Errors>{errors.name.message}</Errors>}
          </div>
          <div>
            <Label>
              {errors.email && <Errors> * </Errors>}
              Электронная почта:
            </Label>
            <Field
              type="email"
              {...register('email')}
              placeholder="your@email.com"
            />
            {errors.email && <Errors>{errors.email.message}</Errors>}
          </div>
          <FieldWrap>
            <Label1>
              {errors.password && <Errors> * </Errors>} Пароль:
              {/* </Label> */}
              <Field
                type={passwordShown ? 'text' : 'password'}
                {...register('password')}
                placeholder="your password"
              />
              {errors.password && <Errors>{errors.password.message}</Errors>}
              <Eye onClick={togglePasswordVisiblity}>
                <FiEyeOff />
              </Eye>
            </Label1>
          </FieldWrap>
          <ButtonBlock
            firstButtonText={'Регистрация'}
            secondButtonText={'Войти'}
            secondButtonHandler={onLoginBtnClick}
            firstButtonType={'submit'}
            secondButtonType={'button'}
          ></ButtonBlock>
        </TextWrap>
      </form>
    </Wrap>
  );
}
