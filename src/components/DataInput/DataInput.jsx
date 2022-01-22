import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getType } from '../../redux/transactions/transactions-selectors';

const DataInput = () => {
  const dispatch = useDispatch();
  const type = useSelector(getType);
  const [period, setPeriod] = useState(new Date().toISOString());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

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

  const handleSubmit = async e => {
    e.preventDefault();

    //Creating new transaction
    await dispatch(
      transactionsOperations.addTransaction({
        period,
        description,
        category,
        amount: Number(amount),
        type,
      }),
    );

    formReset();
  };

  const formReset = () => {
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
            placeholder={
              type === 'credit' ? 'Описание товара' : 'Описание дохода'
            }
            name="description"
            value={description}
          />
          <SelectList
            name="category"
            value={category}
            onChange={handleFormChange}
          >
            <CategoryItem value="">
              {type === 'credit' ? 'Категория товара' : 'Категория дохода'}
            </CategoryItem>
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
