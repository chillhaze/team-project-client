import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal, confirmAction } from 'redux/confirming/confirm-slice';
import { Button, ButtonsWrapper } from './styled/Button.styled';

const ButtonsSet = ({ value1, value2 }) => {
  const dispatch = useDispatch();
  const wantToStay = e => {
    const buttonName = e.target.textContent;
    if (buttonName.toLowerCase() === 'нет') {
      dispatch(closeModal());
    }
    if (buttonName.toLowerCase() === 'да') {
      dispatch(confirmAction(true));
    }
  };

  return (
    <ButtonsWrapper onClick={e => wantToStay(e)}>
      <Button type="button">{value1}</Button>
      <Button type="button" name={value2}>
        {value2}
      </Button>
    </ButtonsWrapper>
  );
};

export default ButtonsSet;
