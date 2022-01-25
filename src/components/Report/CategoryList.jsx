import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper,List,CategoriesWrapper,Item } from './styled/CategoryList.styled';
import ExpensesIncome from './ExpensesIncome';
import ItemCategory from './ItemСategory';
import SwitchType from './SwitchTypeTransaction';

function CategoryList({ type, getSubcategories, onHandlerChangeType }) {
  const report = useSelector(
    ({ reports }) => reports.reportsDataDetailed.categories,
  );
  const totalCost = useSelector(
    ({ reports }) => reports.reportsDataDetailed.totalCosts,
  );
  const totalIncome = useSelector(
    ({ reports }) => reports.reportsDataDetailed.totalIncome,
  );

  function getCategoriesByType(type) {
    const reportByType = report.filter(item => item.type === type);
    return reportByType;
  }

  return (
    <Wrapper>
      <ExpensesIncome totalCost={totalCost} totalIncome={totalIncome} />
      <CategoriesWrapper>
              <SwitchType
        name={type === 'cost' ? 'Расходы' : 'Доходы'}
        onHandlerChangeType={onHandlerChangeType}
      />

      <List>
        {report !== null &&
          getCategoriesByType(type).map(({ _id, name, total, iconUrl }) => (
            <Item key={_id}>
              <ItemCategory
                id={_id}
                summItemCategory={total}
                name={name}
                icon={iconUrl}
                getSubcategories={getSubcategories}
              />
          
            </Item>
          ))}
        </List>
        </CategoriesWrapper>
    </Wrapper>
  );
}

export default CategoryList;
