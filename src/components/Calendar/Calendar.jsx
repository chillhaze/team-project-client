import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import icons from '../../images/icons.svg';

import { Wrapper, CalendarButton, Svg } from './Calendar.styled';

const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <CalendarButton
      onClick={onClick}
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
        selected={startDate}
        maxDate={new Date()}
        onChange={date => setStartDate(date)}
      />
    </Wrapper>
  );
};

export default Calender;
