import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Wrapper = styled.div``;

export const ButtonsWrapper = styled.div`
  display: ${props => props.isMobile && 'flex'};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -40px;
    left: 0;
  }
`;

export const BtnExpences = styled.button`
  width: 159px;
  height: 53px;
  margin-right: ${props => (props.isMobile ? '0px' : '2px')};
  text-align: center;
  cursor: pointer;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  background-color: #f5f6fb;
  color: ${({ disabled }) =>
    disabled ? theme.colors.accentColor : theme.colors.mainTextColor};

  &:hover,
  &:focus {
    background-color: #ff751d;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;
    margin: 0;

    border-radius: 20px 20px 0 0;
    background-color: #fafbfd;

    &:hover,
    &:focus {
      background-color: #fefefe;
      color: #ff751d;
    }
  }
`;

export const BtnIncome = styled.button`
  width: 159px;
  height: 53px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  background-color: #f5f6fb;
  color: ${({ disabled }) =>
    disabled ? theme.colors.accentColor : theme.colors.mainTextColor};

  &:hover,
  &:focus {
    background-color: #ff751d;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;

    border-radius: 20px 20px 0 0;
    background-color: #fafbfd;

    &:hover,
    &:focus {
      background-color: #fefefe;
      color: #ff751d;
    }
  }
`;
