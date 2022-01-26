import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Wrapper,
  WrapperReport,
  WrapperCategories,
  ListItem,
} from './styled/CategoryList.styled';
import ExpensesIncome from './ExpensesIncome';
import ItemCategory from './ItemСategory';
import SwitchType from './SwitchTypeTransaction';

function CategoryList({ type, getSubcategories, onHandlerChangeType }) {
  const report = useSelector(
    ({ reports }) => reports.reportsDataDetailed.categories,
  );
  const totalCost = useSelector(({ reports }) =>
    reports.reportsDataDetailed.totalCosts.toFixed(2),
  );
  const totalIncome = useSelector(({ reports }) =>
    reports.reportsDataDetailed.totalIncome.toFixed(2),
  );
  function getCategoriesByType(type) {
    const reportByType = report.filter(item => item.type === type);
    return reportByType;
  }

  return (
    <Wrapper>
      <ExpensesIncome totalCost={totalCost} totalIncome={totalIncome} />
      <WrapperReport>
        <SwitchType
          name={type === 'cost' ? 'Расходы' : 'Доходы'}
          onHandlerChangeType={onHandlerChangeType}
        />
        <WrapperCategories>
          {report !== null &&
            getCategoriesByType(type).map(({ _id, name, total, iconUrl }) => (
              <ListItem key={_id}>
                <ItemCategory
                  id={_id}
                  summItemCategory={total}
                  name={name}
                  icon={iconUrl}
                  getSubcategories={getSubcategories}
                />
              </ListItem>
            ))}
        </WrapperCategories>
      </WrapperReport>
    </Wrapper>
  );
}

export default CategoryList;
