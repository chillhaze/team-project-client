import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateName } from 'redux/auth/auth-slice';
import { SetingsWrapper, Wrapper } from './styled/Setings.styled';

export default function Setings() {
  const userName = useSelector(({ auth }) => auth.user.name);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name !== userName && !isEditing) {
      dispatch(updateName(name));
    }
  }, [name, isEditing]);

  const editingHandler = () => {
    setIsEditing(!isEditing);
  };

  const handlerChange = e => {
    setName(e.target.value);
  };

  return (
    <Wrapper>
      <button onClick={() => setIsOpen(!isOpen)}>Настройки</button>
      <SetingsWrapper isOpen={isOpen}>
        <span>Ваше имя: </span>{' '}
        {isEditing ? (
          <input onChange={handlerChange} value={name} />
        ) : (
          <span>{name}</span>
        )}
        <button onClick={editingHandler}>
          {isEditing ? 'Подтвердить' : 'Изменить'}{' '}
        </button>
        <br />
        <span>Обновить аватар: </span>
        <input type="file" />
      </SetingsWrapper>
    </Wrapper>
  );
}
