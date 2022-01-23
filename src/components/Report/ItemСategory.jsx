import React from 'react';
import { Wrapper } from './styled/ItemСategory.styled';

function ItemCategory({ id, summItemCategory, icon, name, getSubcategories }) {
  return (
    <Wrapper>
      <button type="button" key={id} onClick={getSubcategories} id={id}>
        <p>{summItemCategory}</p>
        <img alt={name} src={icon} width="56" />
        <p>{name}</p>
      </button>
    </Wrapper>
  );
}

export default ItemCategory;
