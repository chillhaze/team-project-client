import React, { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import icons from '../../images/icons.svg';
import { getPeriod } from '../../redux/transactions/transactions-selectors';
import { setPeriod } from '../../redux/transactions/transactions-slice';
import { Wrapper, CalendarButton, Svg } from './Calendar.styled';

const Calender = () => {
  const dispatch = useDispatch();
  const period = useSelector(getPeriod);

  useEffect(() => {
    dispatch(setPeriod(new Date().toISOString()));
  }, [dispatch]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <CalendarButton
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      className="example-custom-input"
      ref={ref}
    >
      <Svg width="20" height="17.68">
        <use href={icons + '#icon-calendar'}></use>
      </Svg>
      {value}
    </CalendarButton>
  ));

  return (
    <Wrapper>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        locale={ru}
        customInput={<ExampleCustomInput />}
        selected={new Date(period)}
        onChange={newPeriod => dispatch(setPeriod(newPeriod.toISOString()))}
      />
    </Wrapper>
  );
};

export default Calender;
