import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import Calendar from '../Calendar/Calendar';
import {
  Wrapper,
  Form,
  BGImage,
  InputWrapper,
  DescriptionWrapper,
  DescriptionInput,
  SelectList,
  CategoryItem,
  AmountInput,
  Svg,
  BtnWrapper,
  EnterButton,
  ClearButton,
} from './DataInput.styled';

// import categories from '../../template/categories.json';
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
  console.log(categories);
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
    // <Wrapper>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Wrapper>
        {/* <Calendar /> */}
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
                  console.log(_id, name);
                  return (
                    <CategoryItem value={_id} key={_id}>
                      {name}
                    </CategoryItem>
                  );
                })}
            </SelectList>
          </InputWrapper>
          <div>
            <AmountInput
              onChange={handleFormChange}
              placeholder="0.00"
              name="amount"
              value={amount}
            />
            <Svg width="20" height="20">
              <use href={icons + '#icon-calculator'}></use>
            </Svg>
          </div>
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
