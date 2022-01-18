import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as transactionOperations from '../../redux/finance/finance-operations';
import transformDate from '../../utils/transformDate';
import {
  Wrapper,
  Form,
  Date,
  InputWrapper,
  DescriptionInput,
  SelectList,
  CategoryItem,
  AmountInput,
  EnterButton,
  ClearButton,
} from './DataInput.styled';

import categories from '../../template/categories.json';

const DataInput = () => {
  const dispatch = useDispatch();
  const [completedAt, setCompletedAt] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  //getting form value to state
  const handleFormChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'completedAt':
        setCompletedAt(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    //Creating new transaction
    dispatch(
      transactionOperations.addTransaction({
        completedAt,
        description,
        category,
        amount,
      }),
    );
    //Updating transaction list with added new transaction
    dispatch(transactionOperations.getFinance());
    formReset();
  };

  const formReset = () => {
    setCompletedAt('');
    setDescription('');
    setCategory('');
    amount('');
  };

  let activateSubmitBtn = true;
  if (completedAt && description && category && amount) {
    activateSubmitBtn = false;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Date onChange={handleFormChange}>{transformDate()}</Date>
        <InputWrapper>
          <DescriptionInput onChange={handleFormChange} />
          <SelectList>
            <CategoryItem value="">Выберите категорию</CategoryItem>
            {categories.ids.map(elem => {
              const { _id, name } = categories.entities[elem];
              return (
                <CategoryItem onChange={handleFormChange} value={_id} key={_id}>
                  {name}
                </CategoryItem>
              );
            })}
          </SelectList>
          <AmountInput onChange={handleFormChange} />
        </InputWrapper>
        <EnterButton type="submit" disabled={activateSubmitBtn}>
          ввод
        </EnterButton>
        <ClearButton type="button" onClick={formReset}>
          очистить
        </ClearButton>
      </Form>
    </Wrapper>
  );
};

export default DataInput;
