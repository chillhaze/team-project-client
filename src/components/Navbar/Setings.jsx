import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateAvatar } from 'redux/auth/auth-operations';
import { updateName } from 'redux/auth/auth-operations';
import {
  AvatarChangeWrapper,
  ChangeNameInput,
  EditBtn,
  NameChangeWrapper,
  NameText,
  SetingsBtn,
  SetingsWrapper,
  UpdateAvatarBtn,
  UpdateAvatarInput,
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

  const onAvatarSubmit = e => {
    e.preventDefault();
    const { avatar } = e.currentTarget.elements;
    const data = new FormData();
    data.append('avatar', avatar.files[0]);
    console.log(data.avatar, data);
    dispatch(updateAvatar(data));
  };

  const onNameSubmit = e => {
    e.preventDefault();
    dispatch(updateName(name));
    setIsEditing(!isEditing);
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
        <NameChangeWrapper>
          <NameText>Ваше имя: </NameText>{' '}
          <form type="submit" onSubmit={onNameSubmit}>
            {isEditing ? (
              <ChangeNameInput onChange={handlerChange} value={name} />
            ) : (
              <UserNameText>{name}</UserNameText>
            )}
            {isEditing ? (
              <>
                <EditBtn type="submit">
                  <svg width="15" height="15">
                    <use href={icons + '#icon-checkmark'}> </use>
                  </svg>
                </EditBtn>
                <EditBtn type="button" onClick={editingHandler}>
                  <svg width="15" height="15">
                    <use href={icons + '#icon-cross'}> </use>
                  </svg>
                </EditBtn>
              </>
            ) : (
              <EditBtn type="button" onClick={editingHandler}>
                <svg width="15" height="15">
                  <use href={icons + '#icon-pencil'}> </use>
                </svg>
              </EditBtn>
            )}
          </form>
        </NameChangeWrapper>

        <AvatarChangeWrapper>
          <NameText>Обновить аватар: </NameText>
          <form onSubmit={onAvatarSubmit} encType="multipart/from-data">
            <UpdateAvatarInput type="file" name="avatar" />
            <EditBtn type="submit">
              <svg width="15" height="15">
                <use href={icons + '#icon-checkmark'}> </use>
              </svg>
            </EditBtn>
          </form>
        </AvatarChangeWrapper>
      </SetingsWrapper>
    </Wrapper>
  );
}
