import React from 'react';
import {
  Wrapper,
  ButtonCategory,
  Category,
  CategoryName,
} from './styled/ItemСategory.styled';
import Icon from '../AnimatedIcon';

function ItemCategory({ id, summItemCategory, icon, name, getSubcategories }) {
  return (
    <Wrapper>
      <ButtonCategory type="button" key={id} onClick={getSubcategories} id={id}>
        <Category>{summItemCategory.toFixed(2)}</Category>
        <Icon url={icon} />
        <CategoryName>{name}</CategoryName>
      </ButtonCategory>
    </Wrapper>
  );
}

export default ItemCategory;
