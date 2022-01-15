import { useSelector } from 'react-redux';
import ButtonsSet from '../Button/Button';
import { ModalContainer, Icon, Title, ExitBtn } from './LogoutModal.styled';
import icons from '../../images/icons.svg';

const LogoutModal = ({ onAction }) => {
  // const isLoggedIn =useSelector(({auth})=>auth.isLoggedIn);
  const isLoggedIn = true;

  return (
    <ModalContainer>
      <ExitBtn onClick={e => onAction()}>
        <Icon>
          <use href={icons + '#icon-close'}></use>
        </Icon>
      </ExitBtn>
      {isLoggedIn ? (
        <Title>Вы действительно хотите выйти?</Title>
      ) : (
        <Title>Вы уверены?</Title>
      )}
      <ButtonsSet value1={'Да'} value2={'Нет'} />
    </ModalContainer>
  );
};
export default LogoutModal;
