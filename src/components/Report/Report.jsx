import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CategoryList from './CategoryList';
import ReportBarChart from './BarChart';
import CurrentPeriod from './CurrentPeriod';
import BackToMain from './BackToMain';
import {
  Wrapper,
  CurrentPeriodWrapper,
  HederReport,
} from './styled/Report.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getReportsDetailed } from 'redux/reports/reports-operations';
import Ballance from 'components/Ballance/Ballance';

const Report = () => {
  const date = new Date();
  const currMonth = date.getMonth();
  const currYear = date.getFullYear();
  const dispatch = useDispatch();
  const [month, setMonth] = useState(currMonth);
  const [year, setYear] = useState(currYear);
  const [type, setType] = useState('cost');
  const [idSubcategory, setIdSubcategory] = useState('');
  const [detailedReport, setDetailedReport] = useState(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const isLoading = useSelector(({ reports }) => reports.isLoadingReports);
  // console.log(isLoading);

  useEffect(() => {
    if ((month, year)) {
      dispatch(getReportsDetailed({ year, month }));
    }
  }, [dispatch, month, year]);

  const monthHandler = e => {
    const value = e.currentTarget.name;
    if (value === 'prev') {
      let prevMonth = month - 1;
      if (prevMonth < 0) {
        prevMonth = 11;
        setYear(year - 1);
      }
      setMonth(prevMonth);
    } else {
      let nextMonth = month + 1;
      if (nextMonth > 11) {
        nextMonth = 0;
        setYear(year + 1);
      }
      setMonth(nextMonth);
    }
  };

  function onHandlerChangeType(e) {
    e.preventDefault();
    if (type === 'cost') {
      setType('income');
    }
    if (type === 'income') {
      setType('cost');
    }
  }

  function getSubcategories(e) {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (detailedReport === false) {
      setDetailedReport(true);
      setIdSubcategory(id);
    }
    if (detailedReport && id !== idSubcategory) {
      setIdSubcategory(id);
    }
    if (detailedReport && id === idSubcategory) {
      setDetailedReport(false);
    }
  }

  return (
    <Wrapper>
      <BackToMain />

      {isMobile ? (
          <CurrentPeriodWrapper>
            <CurrentPeriod month={month} year={year} onClick={monthHandler} />
            <Ballance />
          </CurrentPeriodWrapper>
      ) : (
        <HederReport>
          <Ballance />
          <CurrentPeriodWrapper>
            <CurrentPeriod month={month} year={year} onClick={monthHandler} />
          </CurrentPeriodWrapper>
        </HederReport>
      )}

      {!isLoading && (
        <>
          <CategoryList
            month={month}
            year={year}
            onHandlerChangeType={onHandlerChangeType}
            type={type}
            getSubcategories={getSubcategories}
          />
          <ReportBarChart
            type={type}
            month={month}
            year={year}
            idSubcategory={idSubcategory}
            detailedReport={detailedReport}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Report;
