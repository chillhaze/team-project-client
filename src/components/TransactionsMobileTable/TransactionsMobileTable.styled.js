import styled from '@emotion/styled';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 300px;
`;
export const TableStyled = styled(Table)`
  /* justify-content: center; */
  /* align-items: center; */
`;

export const TableContainerStyled = styled(TableContainer)`
  /* @media screen and (min-width: 768px) {
    width: 605px;
    max-height: 384px;
    margin-bottom: 40px;
    border-radius: 15px 15px 0px 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;
    max-height: 382px;
  } */
  /* width: calc(100% - 5px); */
`;

export const TableBodyStyled = styled(TableBody)`
  /* background-color: #ffffff;
    color: #000000; */
`;

export const TableCellStyled = styled(TableCell)`
  /* height: 40px; */
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  padding: 5px 5px;
`;

export const CellWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CellItem = styled.div`
  margin-right: 20px;
`;
export const Description = styled.div`
  /* background-color: #ffffff;
    color: #000000; */
`;
export const Date = styled.div`
  font-size: 8px;
`;
export const Category = styled.div`
  /* background-color: #ffffff;
    color: #000000; */
`;
export const Amount = styled.div`
  /* background-color: #ffffff;
    color: #000000; */
  margin-right: 10px;
`;
export const AmountData = styled.p`
  /* background-color: #ffffff;
    color: #000000; */
  margin-right: 10px;
`;

export const BtnDelete = styled.button`
  /* border-radius: 50%;
    border: transparent;
    cursor: pointer; */
`;

export const svgDelete = styled.svg`
  /* background-color: transparent; */
`;
