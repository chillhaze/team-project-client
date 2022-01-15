import ButtonsSet from '../Button/Button';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { ModalContainer, Icon, Title, ExitBtn } from './styled/LogoutModal.styled';
import icons from '../../images/icons.svg';

//Создания портала и вызов модалки для правильного позиционирования
const Modal = ({onAction,value}) => {
  return ReactDOM.createPortal(
    <LogoutModal onAction={onAction} value={value} />,
    document.getElementById('portal')
  )
}

//Модалка с пропсами
const LogoutModal = ({ onAction,value }) => {
  const logout = value === "logout"
 
  return (
    <ModalContainer>
      <ExitBtn onClick={e => onAction()}>
        <Icon>
          <use href={icons + '#icon-close'}></use>
        </Icon>
      </ExitBtn>
      {logout ? (
        <Title>Вы действительно хотите выйти?</Title>
      ) : (
        <Title>Вы уверены?</Title>
      )}
      <ButtonsSet value1={'Да'} value2={'Нет'} />
    </ModalContainer>
  );
};
export default Modal;
