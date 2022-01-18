import React from 'react';
import { Wrapper } from './styled/CategoryList.styled';
import category from './db/db.json';
import ItemCategory from './ItemСategory';

function CategoryList() {
  return (
    <Wrapper>
      <ul>
        {category.map(({ summ, name, icon }) => (
          <li>
            {
              <ItemCategory
                summItemCategory={summ}
                nameCategory={name}
                icon={icon}
              />
            }
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default CategoryList;
