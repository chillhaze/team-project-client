import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: none;
  z-index: 999;

  @media screen and (min-width: 768px) {
    display: block;
    width: 104px;
    margin-right: 33px;
    padding-top: 2px;
  }
`;

export const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  width: 104px;
  height: 40px;
  padding: 0;
  margin-right: 25px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
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
