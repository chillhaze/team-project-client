import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/auth-operations';
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
} from './LoginForm.styled';
import { CabbageBottom } from 'components/Wrappers/styled/StartPageWrapper.styled';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required('Требуется действительный адрес электронной почты'),
  password: Yup.string()
    .min(6, 'Пароль короткий - должен быть не менее 6 символов')
    .required('Обязательно'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = newUser => {
    dispatch(login(newUser));
  };
  const onRegisterBtnClick = () => navigate('/register');

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
            Или зайти с помощью e-mail и пароля, <br /> предварительно
            зарегистрировавшись:
          </Text1>
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
                // type="password"
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
            firstButtonText={'Войти'}
            secondButtonText={'Регистрация'}
            secondButtonHandler={onRegisterBtnClick}
            firstButtonType={'submit'}
            secondButtonType={'button'}
          ></ButtonBlock>
        </TextWrap>
      </form>
      <CabbageBottom/>
    </Wrap>
  );
}

