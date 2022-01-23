import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateAvatar } from 'redux/auth/auth-operations';
import { updateName } from 'redux/auth/auth-slice';
import {
  ChangeNameInput,
  EditBtn,
  NameText,
  SetingsBtn,
  SetingsWrapper,
  UserNameText,
  Wrapper,
} from './styled/Setings.styled';
import icons from '../../images/icons.svg';

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
      <SetingsBtn onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg width="20" height="20">
            <use href={icons + '#icon-cross'}> </use>
          </svg>
        ) : (
          <svg width="25" height="25">
            <use href={icons + '#icon-setings'}> </use>
          </svg>
        )}
      </SetingsBtn>
      <SetingsWrapper isOpen={isOpen}>
        <NameText>Ваше имя: </NameText>{' '}
        {isEditing ? (
          <ChangeNameInput onChange={handlerChange} value={name} />
        ) : (
          <UserNameText>{name}</UserNameText>
        )}
        <EditBtn onClick={editingHandler}>
          {isEditing ? (
            <svg width="15" height="15">
              <use href={icons + '#icon-checkmark'}> </use>
            </svg>
          ) : (
            <svg width="15" height="15">
              <use href={icons + '#icon-pencil'}> </use>
            </svg>
          )}{' '}
        </EditBtn>
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
