import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from './styled/CategoryList.styled';
import ExpensesIncome from './ExpensesIncome';
import ItemCategory from './ItemСategory';
import SwitchType from './SwitchTypeTransaction';

function CategoryList({ type, getSubcategories, onHandlerChangeType }) {
  const report = useSelector(
    ({ reports }) => reports.reportsDataDetailed.categories,
  );
  console.log(report);
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
      Категории
      <ExpensesIncome totalCost={totalCost} totalIncome={totalIncome} />
      <SwitchType
        name={type === 'cost' ? 'Расходы' : 'Доходы'}
        onHandlerChangeType={onHandlerChangeType}
      />
      <ul>
        {report !== null &&
          getCategoriesByType(type).map(({ _id, name, total, iconUrl }) => (
            <li>
              <ItemCategory
                id={_id}
                summItemCategory={total}
                name={name}
                icon={iconUrl}
                getSubcategories={getSubcategories}
              />
            </li>
          ))}
      </ul>
    </Wrapper>
  );
}

export default CategoryList;
