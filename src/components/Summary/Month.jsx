const monthes = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  export const MonthName = currMonth => {
    let monthName = '';
    monthes.forEach((name, i) => {
      if (i === currMonth)
      monthName = name;
      console.log(monthName)
    });
    return monthName;
  };