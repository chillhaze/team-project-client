import styled from '@emotion/styled';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

export const Wrapper = styled.div`
  margin-right: 30px;
`;

export const BtnDelete = styled.button`
  // margin-left: 52px;
  background-color: transparent;
  border-radius: 50%;
  border: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f5f6fb;
  }
`;

export const TableHeadStyled = styled(TableHead)`
  height: 38px;
  background-color: #f5f6fb;

  color: #000000;
  font-family: Roboto, sans-serif;
  font-style: normal;
  text-transform: uppercase;
`;

export const TableBodyStyled = styled(TableBody)`
  background-color: #ffffff;
  color: #000000;
`;

export const TableCellStyled = styled(TableCell)`
  height: 40px;
  padding: 0;
  padding-left: 20px;
  font-family: Roboto, sans-serif;
`;

export const TableStyled = styled(Table)``;

export const TableContainerStyled = styled(TableContainer)`
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: #f5f6fb;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff751d;
    border-radius: 2px;
  }

  @media screen and (min-width: 768px) {
    width: 605px;
    max-height: 384px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;
    max-height: 382px;
  }
`;

// export const TableCellDate = styled(TableCell)`
//   height: 40px;
//   padding: 0;
//   padding-left: 20px;
//   font-family: Roboto, sans-serif;
// `;

export const TableCellDesc = styled(TableCell)`
  padding: 0;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    width: 168px;
  }

  @media screen and (min-width: 1280px) {
    width: 252px;
  }
`;

// export const TableCellCategory = styled(TableCell)`
//   height: 40px;
//   padding: 0;
//   padding-left: 20px;
//   font-family: Roboto, sans-serif;
// `;

export const TableCellAmount = styled(TableCell)`
  display: flex;

  justify-content: space-around;
  align-items: center;

  height: 40px;
  padding: 0;

  font-family: Roboto, sans-serif;
`;
