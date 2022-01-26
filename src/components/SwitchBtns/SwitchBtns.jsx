import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  ButtonsWrapper,
  BtnExpences,
  BtnIncome,
} from './SwitchBtns.styled';
import { setType } from '../../redux/transactions/transactions-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import * as transactionSelectors from '../../redux/transactions/transactions-selectors';
import { useMediaQuery } from 'react-responsive';

const EXPENCES_TYPE = 'credit';
const INCOME_TYPE = 'debit';
const INCOMES_PAGE = 'Доход';

const SwitchBtns = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const type = useSelector(transactionSelectors.getType);
  const location = useLocation();

  const handleClick = e => {
    // dispatch(
    //   setType(
    //     e.target.textContent === INCOMES_PAGE ? INCOME_TYPE : EXPENCES_TYPE,
    //   ),
    //   type === 'credit'
    //     ? navigate('/finance/income')
    //     : navigate('/finance/expenses'),
    // );
      dispatch(setType(
        e.target.textContent === INCOMES_PAGE
          ? INCOME_TYPE
          : EXPENCES_TYPE,
        )
      );
    
    // type === 'credit'
    //   ? navigate('/finance/income')
    //   : navigate('/finance/expenses');
    
  };

  return (
    <Wrapper>
      <ButtonsWrapper isMobile={isMobile}>
        <BtnExpences
          isMobile={isMobile}
          type="button"
          onClick={handleClick}
          location={location}
          // disabled={type === '/finance/expenses' ? true : false}
          disabled={type === 'credit' ? true : false}
        >
          Расход
        </BtnExpences>
        <BtnIncome
          isMobile={isMobile}
          type="button"
          onClick={handleClick}
          location={location}
          // disabled={type === '/finance/income' ? true : false}
          disabled={type === 'debit' ? true : false}
        >
          Доход
        </BtnIncome>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default SwitchBtns;
