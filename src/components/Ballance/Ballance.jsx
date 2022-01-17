import {
  BalanceWrapper,
  Button,
  Form,
  Input,
  Text,
  BalanceText,
  Wrapper,
} from './styled/Ballance.styled';
import ToReports from './ToReports';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBalanceToState } from 'redux/finance/finance-slice';
import { useMediaQuery } from 'react-responsive';
import WellcomeMessage from './WellcomeMessage';
import { openModal } from 'redux/confirming/confirm-slice';

const Ballance = () => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const isConfirmed = useSelector(state => state.confirm.isConfirmed);

  // берем баланс со стейта
  const balance = useSelector(({ finance }) => finance.financeData.ballance);
  const [curentBalance, setCurentBalance] = useState('');

  // проверка, первый раз вводится баланс или нет
  const [isBalanceEntered, setIsBalanceEntered] = useState(false);
  useEffect(() => {
    if (balance) {
      setIsBalanceEntered(true);
    }
  }, []);

  // Если подтвердили ввод - забрасываем баланс в стейт и на бэк
  // пока забрасываем только в стейт - дальше будет + пост запрос на бек
  useEffect(() => {
    if (isConfirmed) {
      dispatch(setBalanceToState(curentBalance));
      setIsBalanceEntered(true);
    }
  }, [isConfirmed]);

  const handlerChange = e => {
    const balance = e.target.value.trim();
    setCurentBalance(balance);
  };

  const onClickHandler = () => {
    curentBalance && dispatch(openModal());
  };

  return (
    <Wrapper>
      {isMobile && <ToReports />}

      <BalanceWrapper>
        <Text>Баланс:</Text>
        {/*Рендерим либо форму (если это первый раз вводим) либо спан с значением
        баланса*/}
        {!isBalanceEntered ? (
          <>
            <Form action="submit">
              <Input
                type="text"
                value={curentBalance}
                onChange={handlerChange}
                placeholder="00.00 UAH"
                min="1"
              />
              <Button onClick={onClickHandler} type="button">
                Подтвердить
              </Button>
            </Form>
            <WellcomeMessage />
          </>
        ) : (
          <>
            <BalanceText>
              {parseFloat(balance).toLocaleString('ru-RU') + ' UAH'}
            </BalanceText>
            <Button disabled={true} type="submit">
              Подтвердить
            </Button>
          </>
        )}
      </BalanceWrapper>
      {!isMobile && <ToReports />}
    </Wrapper>
  );
};

export default Ballance;
