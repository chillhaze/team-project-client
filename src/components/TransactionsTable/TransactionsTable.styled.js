import styled from '@emotion/styled';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export const Wrapper = styled.div`
  margin-right: 30px;
`;

export const BtnDelete = styled.button`
  border-radius: 50%;
  border: transparent;
  cursor: pointer;
`;

export const TableHeadStyled = styled(TableHead)`
  height: 38px;
  background-color: #f5f6fb;
  color: #000000;
`;

export const TableBodyStyled = styled(TableBody)`
  background-color: #ffffff;
  color: #000000;
`;

export const TableCellStyled = styled(TableCell)`
  height: 40px;
`;

export const TableStyled = styled(Table)``;

export const TableContainerStyled = styled(TableContainer)`
  @media screen and (min-width: 768px) {
    width: 605px;
    max-height: 384px;
    margin-bottom: 40px;
    border-radius: 15px 15px 0px 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;
    max-height: 382px;
  }
`;

export const svgDelete = styled.svg`
  background-color: transparent;
`;
