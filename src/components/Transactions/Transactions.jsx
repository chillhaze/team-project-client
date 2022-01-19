import { Wrapper } from './Transactions.styled';

const Transactions = () => {
  return (
    <Wrapper>
      <button>Расходы</button>
      <button>Доходы</button>

      {/* Тут будет рендер страницы Расходов или Доходов в зависисмости от того, какая кнопка нажата*/}
    </Wrapper>
  );
};

export default Transactions;
