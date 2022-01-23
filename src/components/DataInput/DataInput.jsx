import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import Calendar from '../Calendar/Calendar';
import {
  Wrapper,
  Form,
  InputWrapper,
  DescriptionInput,
  SelectList,
  CategoryItem,
  AmountInput,
  EnterButton,
  ClearButton,
} from './DataInput.styled';

import categories from '../../template/categories.json';
import {
  getType,
  getPeriod,
} from '../../redux/transactions/transactions-selectors';

const DataInput = () => {
  const dispatch = useDispatch();
  const type = useSelector(getType);
  const period = useSelector(getPeriod);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleFormChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Calendar />
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
