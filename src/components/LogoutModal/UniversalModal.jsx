import ButtonsSet from '../Button/Button';

import { Route } from 'react-router-dom';
import {
  ModalContainer,
  Icon,
  Title,
  ExitBtn,
  ModalBackground,
} from './styled/UniversalModal.styled';
import icons from '../../images/icons.svg';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from 'redux/confirming/confirm-slice';

export const UniversalModal = () => {
  const isLogOut = useSelector(state => state.confirm.isLogOut);
  const dispatch = useDispatch();

  // закрытие по клику в оверлей
  const onOverlayClick = e => {
    const isOverlay = e.target.id === 'overlay';
    isOverlay && dispatch(closeModal());
  };

  return (
    <ModalBackground id="overlay" onClick={onOverlayClick}>
      <ModalContainer>
        <ExitBtn onClick={() => dispatch(closeModal())}>
          <Icon>
            <use href={icons + '#icon-close'}></use>
          </Icon>
        </ExitBtn>
        // рендерим тайтл в засимости от того // это логаут или подтверждеие
        действия
        {isLogOut ? (
          <Title>Вы действительно хотите выйти?</Title>
        ) : (
          <Title>Вы уверены?</Title>
        )}
        <ButtonsSet value1={'да'} value2={'нет'} />
      </ModalContainer>
    </ModalBackground>
  );
};
