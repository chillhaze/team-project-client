import React, { useEffect, useState } from 'react';
import icons from '../../images/icons.svg';
import { Wrapper, ArrowBackBtn, DateContainer, PeriodTitle, BalancePeriod, BalancePeriodWrapper } from './styled/CurrentPeriod.styled';

function CurrentPeriod({ selectedPeriod, onClickBack, onClickForvard }) {

    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",];
    const date = new Date();
    const currMonth = date.getMonth();
    const currYear = date.getFullYear();

    useEffect(() => {
      if (month === '') {
        setMonth(currMonth)
        setYear(currYear)
      }
    }, []);

    const monthHandler = (e) => {
      const value = e.currentTarget.name;
      if (value === "prev") {
        let prevMonth = month - 1;
        if (prevMonth < 0) {
          prevMonth = 11;
          setYear(year - 1)
        }
        setMonth(prevMonth)
      } else {
         let nextMonth = month + 1;
        if (nextMonth >11) {
          nextMonth =0;
          setYear(year + 1)
        }
        setMonth(nextMonth)
      }
    }
  

  return (
    <Wrapper>
      <PeriodTitle>Текущий период:</PeriodTitle>
      <DateContainer>
         <ArrowBackBtn type="button" name="prev" onClick={monthHandler}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-left'}></use>
        </svg>
      </ArrowBackBtn>
     <BalancePeriodWrapper> <BalancePeriod>{monthArr[month]} { year}</BalancePeriod></BalancePeriodWrapper>
      <ArrowBackBtn type="button" name="next" onClick={monthHandler}>
        <svg width="4px" height="10px">
          <use href={icons + '#icon-arrow-right'}></use>
        </svg>
      </ArrowBackBtn>
     </DateContainer>
    </Wrapper>
  );
}

export default CurrentPeriod;
