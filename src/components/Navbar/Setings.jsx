import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateAvatar } from 'redux/auth/auth-operations';
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

  const handleOnSubmit = e => {
    e.preventDefault();
    const { avatar } = e.currentTarget.elements;
    const data = new FormData();
    data.append('avatar', avatar.files[0]);
    console.log(data.avatar, data);
    dispatch(updateAvatar(data));
  };

  return (
    <Wrapper>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Закрыть' : 'Настройки'}
      </button>
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
        <form onSubmit={handleOnSubmit} encType="multipart/from-data">
          <input type="file" name="avatar" />
          <button type="submit">Обновить аватарку</button>
        </form>
      </SetingsWrapper>
    </Wrapper>
  );
}