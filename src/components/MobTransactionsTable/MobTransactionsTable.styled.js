import styled from '@emotion/styled';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

export const Wrapper = styled.div`
  margin-right: 30px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    width: 280px;
    margin: 0;
  }
`;

export const BtnDelete = styled.button`
  margin-left: 42px;

  background-color: transparent;
  border-radius: 50%;
  border: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f5f6fb;
  }

  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;

export const TableRowStyled = styled(TableRow)`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
`;

export const TableHeadStyled = styled(TableHead)`
  height: 38px;
  text-align: center;

  color: #000000;
  font-family: Roboto, sans-serif;
  font-style: normal;
  text-transform: uppercase;

  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
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

  @media screen and (max-width: 767px) {
    padding: 0;
  }
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

  @media screen and (max-width: 767px) {
    border: none;
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

export const MobDiv = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;

    border-bottom: '2px solid #F5F6FB';
  }
`;

export const TableCellDate = styled(TableCell)`
  height: 40px;
  padding: 0;
  padding-left: 20px;
  font-family: Roboto, sans-serif;
  @media screen and (max-width: 767px) {
    height: 7px;
    padding: 0;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 1.125;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: none;
    color: #52555f;
  }
`;

export const TableCellDesc = styled(TableCell)`
  height: 40px;
  padding: 0;
  padding-left: 20px;
  font-family: Roboto, sans-serif;
  @media screen and (max-width: 767px) {
    padding: 0;
    height: 20px;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.17;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    border: none;
    color: #52555f;
  }
`;

export const TableCellCategory = styled(TableCell)`
  height: 40px;
  padding: 0;
  padding-left: 20px;
  font-family: Roboto, sans-serif;
  @media screen and (max-width: 767px) {
    padding: 0;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 1.125;
    letter-spacing: 0.04em;
    color: #52555f;
  }
`;

export const TableCellAmount = styled(TableCell)`
  display: flex;
  justify-content: center;
  height: 40px;
  padding: 0;
  padding-left: 20px;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;

    padding: 0;
    box-sizing: border-box;
    margin: 0;

    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.67;
    letter-spacing: 0.04em;
  }
`;
