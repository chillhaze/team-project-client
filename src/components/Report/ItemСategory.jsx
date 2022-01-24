import React from 'react';
import { Wrapper } from './styled/ItemСategory.styled';
import Icon from '../AnimatedIcon';

function ItemCategory({ id, summItemCategory, icon, name, getSubcategories }) {
  return (
    <Wrapper>
      <button type="button" key={id} onClick={getSubcategories} id={id}>
        <p>{summItemCategory}</p>
        <Icon url={icon} />
        <p>{name}</p>
      </button>
    </Wrapper>
  );
}

export default ItemCategory;
