import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import {
  Wrapper,
  Form,
  BGImage,
  InputWrapper,
  DescriptionInput,
  SelectList,
  CategoryItem,
  AmountWrapper,
  AmountInput,
  CalcConteiner,
  Svg,
  BtnWrapper,
  EnterButton,
  ClearButton,
} from './DataInput.styled';

import { getFilteredCategories } from '../../redux/categories/categories-selectors';

import {
  getType,
  getPeriod,
} from '../../redux/transactions/transactions-selectors';
import icons from '../../images/icons.svg';

const DataInput = () => {
  const dispatch = useDispatch();
  const type = useSelector(getType);
  const period = useSelector(getPeriod);
  const categories = useSelector(getFilteredCategories);
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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Wrapper>
        <BGImage>
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
              {categories.length !== 0 &&
                categories.map(({ _id, name }) => {
                  return (
                    <CategoryItem value={_id} key={_id}>
                      {name}
                    </CategoryItem>
                  );
                })}
            </SelectList>
          </InputWrapper>
          <AmountWrapper>
            <AmountInput
              onChange={handleFormChange}
              placeholder="0.00"
              name="amount"
              value={amount}
            />
            <CalcConteiner>
              <svg width="20" height="20">
                <use href={icons + '#icon-calculator'}></use>
              </svg>
            </CalcConteiner>
          </AmountWrapper>
        </BGImage>
        <BtnWrapper>
          <EnterButton type="submit">ввод</EnterButton>
          <ClearButton type="button" onClick={formReset}>
            очистить
          </ClearButton>
        </BtnWrapper>
      </Wrapper>
    </Form>
  );
};

export default DataInput;
