import React from 'react';
import { useDispatch } from 'react-redux';
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

import categories from '../template/categories.json';

import { addTransaction } from '../../redux/finance/finance-operations';

const DataInput = () => {
  const initialState = {
    type: '',
    completedAt: '',
    description: '',
    category: '',
    amount: '',
    owner: '',
  };

  const [transaction, setTransaction] = React.useState(initialState);
  const { type, completedAt, description, category, amount, owner } =
    transaction;

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    await dispatch(
      addTransaction({
        type,
        completedAt,
        description,
        category,
        amount,
        owner,
      }),
    );
    reset();
  };

  const clearlInput = () => {
    setTransaction(initialState);
  };

  const reset = () => {
    setTransaction(initialState);
  };

  let activateSubmitBtn = true;
  if (completedAt && description && category && amount) {
    activateSubmitBtn = false;
  }

  // const getDate = date => {
  //   let dd = String(date.getDate()).padStart(2, '0');
  //   let mm = String(date.getMonth() + 1).padStart(2, '0');
  //   let yyyy = String(date.getFullYear());

  //   return (date = mm + '/' + dd + '/' + yyyy);
  // };

  // let todayDate = getDate(new Date());
  // console.log(todayDate);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Date>Дата</Date>
        <InputWrapper>
          <DescriptionInput />
          <SelectList>
            <CategoryItem value="">Выберите категорию</CategoryItem>
            {categories.map(({ _id, name }) => (
              <CategoryItem value={_id} key={_id}>
                {name}
              </CategoryItem>
            ))}
          </SelectList>
          <AmountInput />
        </InputWrapper>
        <EnterButton type="submit" disabled={activateSubmitBtn}>
          ввод
        </EnterButton>
        <ClearButton type="button" onClick={clearlInput}>
          очистить
        </ClearButton>
      </Form>
    </Wrapper>
  );
};

export default DataInput;
