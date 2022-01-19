import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import transformDate from '../../utils/transformDate';
import {
  Wrapper,
  Form,
  TodayDate,
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
  const [period, setPeriod] = useState(new Date().toISOString());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  // const [type, setType] = useState('credit');

  //getting form value to state
  const handleFormChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'period':
        setPeriod(value);
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
      transactionsOperations.addTransaction({
        period,
        description,
        category,
        amount: Number(amount),
        type: 'credit',
      }),
    );
    //Updating transaction list with added new transaction
    dispatch(transactionsOperations.getTransactions());
    formReset();
  };

  const formReset = () => {
    setPeriod('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  // let activateSubmitBtn = true;
  // if (period && description && category && amount) {
  //   activateSubmitBtn = false;
  // }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TodayDate
          onChange={handleFormChange}
          name="completedAt"
          value={period}
        >
          {transformDate(period)}
        </TodayDate>
        <InputWrapper>
          <DescriptionInput
            onChange={handleFormChange}
            placeholder="Описание расхода"
            name="description"
            value={description}
          />
          <SelectList
            name="category"
            value={category}
            onChange={handleFormChange}
          >
            <CategoryItem value="">Выберите категорию</CategoryItem>
            {categories.ids.map(elem => {
              const { _id, name } = categories.entities[elem];
              return (
                <CategoryItem value={_id} key={_id}>
                  {name}
                </CategoryItem>
              );
            })}
          </SelectList>
          <AmountInput
            onChange={handleFormChange}
            placeholder="0.00"
            name="amount"
            value={amount}
          />
        </InputWrapper>
        <EnterButton type="submit">ввод</EnterButton>
        <ClearButton type="button" onClick={formReset}>
          очистить
        </ClearButton>
      </Form>
    </Wrapper>
  );
};

export default DataInput;
