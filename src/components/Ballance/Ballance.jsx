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


const Ballance = () => {


    const isMobile = useMediaQuery({
      query: '(max-width: 767px)',
    })
  
  
  // берем баланс со стейта
  const balance = useSelector(({ finance }) => finance.financeData.ballance);
  const dispatch = useDispatch();

  const [curentBalance, setCurentBalance] = useState('');

  // проверка, первый раз вводится баланс или нет, что бы задизейблить кнопку
  const [isBalanceEntered, setIsBalanceEntered] = useState(false);
  useEffect(() => balance && setIsBalanceEntered(true), []);

  const handlerChange = e => {
    const balance = e.target.value.trim()
    setCurentBalance(balance);
  };

  // забрасываем баланс в стейт и на бэк
  const handlerSubmit = e => {
    e.preventDefault();
    // пока забрасываем только в стейт - дальше будет + пост запрос
   if(!curentBalance) {
     return
   } 
   dispatch(setBalanceToState(curentBalance));
    setIsBalanceEntered(true);
  };

  return (
    <Wrapper>

     {isMobile && <ToReports /> } 

      <BalanceWrapper>
        <Text>Баланс:</Text>

        {!isBalanceEntered ? (
          <Form action="submit" onSubmit={handlerSubmit}>
            <Input
              type="text"
              value={curentBalance}
              onChange={handlerChange}
              placeholder="00.00 UAH"
              min="1"
            />
            <Button type="submit">
              Подтвердить
            </Button>
          </Form>
        ) : (
          <>
            <BalanceText>
              {parseFloat(curentBalance).toLocaleString('ru-RU') + ' UAH'}
            </BalanceText>
            <Button disabled={true} type="submit">
              Подтвердить
            </Button>
          </>
        )}
      </BalanceWrapper>
          {!isMobile && <ToReports />  }

    </Wrapper>
  );
};

export default Ballance;
