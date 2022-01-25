import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 104px;
    margin-right: 33px;
    padding-top: 15px;
  }
`;

export const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 25px;

  border: none;
  color: #52555f;
  background-color: transparent;
  cursor: pointer;
`;

export const Svg = styled.svg`
  margin: 0;
  padding: 0;
  margin-right: 10px;
`;
