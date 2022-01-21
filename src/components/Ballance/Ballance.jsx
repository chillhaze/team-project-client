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
import { useMediaQuery } from 'react-responsive';
import WellcomeMessage from './WellcomeMessage';
import { openModal, confirmAction } from 'redux/confirming/confirm-slice';
import {
  createBallance,
  getBallance,
} from 'redux/ballance/ballance-operations';
import { setBalanceToState } from 'redux/ballance/ballance-slice';

const Ballance = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const dispatch = useDispatch();

  // берем баланс с бека
  useEffect(() => {
    dispatch(getBallance());
  }, [dispatch]);

  const balance = useSelector(({ ballance }) => ballance.ballanceData);

  // Для проверки подтверждено ли дейтсвие в модалке
  const isConfirmed = useSelector(state => state.confirm.isConfirmed);
  // Для проверки на тип текущей операции
  const [isBalanceOperation, setIsBalanceOperation] = useState(false);

  const [curentBalance, setCurentBalance] = useState('');

  // проверка, первый раз вводится баланс или нет
  const [isBalanceEntered, setIsBalanceEntered] = useState(false);

  useEffect(() => {
    if (balance) {
      setIsBalanceEntered(true);
      setCurentBalance(balance);
    }
  }, [balance]);

  // Если подтвердили ввод, и это операция с балансом
  // забрасываем баланс в стейт и на бэк
  // пока забрасываем только в стейт - дальше будет + пост запрос на бек
  useEffect(() => {
    if (isConfirmed && isBalanceOperation) {
      dispatch(setBalanceToState(curentBalance));
      dispatch(createBallance(curentBalance));
      setIsBalanceEntered(true);
      dispatch(confirmAction(false));
      setIsBalanceOperation(false);
    }
  }, [isConfirmed, isBalanceOperation]);

  const handlerChange = e => {
    const balance = e.target.value.trim();
    setCurentBalance(balance);
  };

  // Открытие модалки и изменения флагов для запуска useEffect и отправки данных
  const onClickHandler = () => {
    setIsBalanceOperation(true);
    curentBalance && dispatch(openModal());

    if (isConfirmed) {
      dispatch(setBalanceToState(curentBalance));
      setIsBalanceEntered(true);
      dispatch(confirmAction(false));
    }
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

            <WellcomeMessage />
          </>
        ) : (
          <>
            <BalanceText>
              {parseFloat(balance).toLocaleString('ru-RU') + ' UAH'}
            </BalanceText>
            {/* <Button disabled={true} type="submit">
              Подтвердить
            </Button> */}
          </>
        )}
      </BalanceWrapper>
      {!isMobile && <ToReports />}
    </Wrapper>
  );
};

export default Ballance;
