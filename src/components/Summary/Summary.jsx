import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Table, TableHeader, TableLine } from './Summary.styled';
import * as reportsOperations from '../../redux/reports/reports-operations';
import * as reportsSelectors from '../../redux/reports/reports-selectors';
import {getType, getPeriod} from '../../redux/transactions/transactions-selectors';

const Summary =()=>  {
  const summary = useSelector(reportsSelectors.getReportsSummary);
  const type = useSelector(getType);
  const period = useSelector(getPeriod);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reportsOperations.getReportsSummary({ type, period:new Date(period).getFullYear() }));
  }, [dispatch, period, type]); 

  const { ids, entities: months } = summary;
  const filteredIds = [...ids].reverse().filter((elem, i) => i < 6)

  return (
    <Wrapper>
      <TableHeader>Сводка</TableHeader>
      <Table>
        <tbody>
          {filteredIds.length!==0 && filteredIds.map(id => {
            return (
              <TableLine key={id}>
                <td>{filteredIds.length!==0 && months[id]?.name}</td> 
                <td>{filteredIds.length!==0 && months[id]?.amount}</td>
              </TableLine>)
            })}
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default Summary