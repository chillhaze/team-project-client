import React from 'react';
import { Wrapper } from './styled/ItemСategory.styled';
import iconCategory from './db/iconCategoryes.svg';

function ItemCategory({
  summItemCategory,
  icon,
  nameCategory,
  toSubcategories,
}) {
  return (
    <Wrapper>
      <ul>
        <li onClick={toSubcategories}>
          <p>{summItemCategory}</p>
        </li>
        <li>
          <svg width="56px" height="56px">
            <use href={iconCategory + `#${icon}`}></use>
          </svg>
        </li>
        <li>
          <p>{nameCategory}</p>
        </li>
      </ul>
    </Wrapper>
  );
}

export default ItemCategory;
