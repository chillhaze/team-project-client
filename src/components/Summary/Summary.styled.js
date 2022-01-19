import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: none;
  background-color: ${props => props.theme.colors.MainBgColor};
  border-radius: 20px 20px 20px 0;
  overflow: hidden;
  width: 230px;
  height: 266px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.16;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.mainTextColor};
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Table = styled.table`
  background-color: ${props => props.theme.colors.MainBgColor};
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  border: 2px solid ${props => props.theme.colors.white};
  height: 38px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #000000;
  align-items: center;
  justify-content: center;
`;

export const TableLine = styled.tr`
  border: 2px solid ${props => props.theme.colors.white};
  height: 38px;
  &:first-child {
    border-top: none;
  }
  text-align: left;
`;

export const Month = styled.td`
  padding-left: 20px;
`;
