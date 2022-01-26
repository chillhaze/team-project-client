import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.MainBgColor};
  margin-bottom: ${props => props.theme.spacing(7.5)};
  text-align: center;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
    margin-bottom: 58px;
    padding-top: 0;
  }
  @media only screen and (min-width: 1280px) {
    display: flex;
    align-items: baseline;
    margin-bottom: 48px;
    padding-top: 0;
  }
`;

export const BalanceWrapper = styled.div`
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 255px;
  }
  @media only screen and (min-width: 1280px) {
    margin-left: 390px;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.1666;
  display: block;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.mainTextColor};
  margin-bottom: ${props => props.theme.spacing(1.5)};

  @media only screen and (min-width: 768px) {
    margin-right: ${props => props.theme.spacing(5)};
  }
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 125px;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.1666;
  text-align: right;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing(4)};
  background-color: transparent;
  outline: none;
  color: ${props => props.theme.colors.black};
  border: 2px solid ${props => props.theme.colors.white};
  box-sizing: border-box;
  border-radius: 22px 0px 0px 22px;

  @media only screen and (min-width: 768px) {
    margin-right: ${props => props.theme.spacing(4)};
    border-radius: 16px;
  }

  @media only screen and (min-width: 1280px) {
    margin-right: ${props => props.theme.spacing(5)};
  }
`;

export const Button = styled.button`
  width: 125px;
  font-size: 12px;
  line-height: 1.1666;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing(4)};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 0px 22px 22px 0px;
  background-color: transparent;
  color: ${props => props.theme.colors.mainTextColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.white};
  }

  @media only screen and (min-width: 768px) {
    border-radius: 16px;
  }
`;
export const BalanceText = styled.span`
  width: 125px;
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.1666;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.black};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 22px;

  @media only screen and (min-width: 768px) {
    border-radius: 16px;
  }
`;
