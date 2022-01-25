import React from 'react';
import { Wrapper,Button } from './styled/ItemСategory.styled';
import Icon from '../AnimatedIcon';

function ItemCategory({ id, summItemCategory, icon, name, getSubcategories }) {
  return (
    <Wrapper>
      <Button type="button" key={id} onClick={getSubcategories} id={id}>
        <p>{summItemCategory}</p>
        <Icon url={icon} />
        <p>{name}</p>
      </Button>
    </Wrapper>
  );
}

export default ItemCategory;
