import styled from '@emotion/styled';

export const Button = styled.button`
  width: 125px;
  height: 44px;
  border-radius: 16px;
  margin: 0;
  border: 2px solid ${props => props.theme.colors.MainBgColor};
  background-color: inherit;
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: ease-out;

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    background-color: ${props => props.theme.colors.accentColor};
    border-color: inherit;
    color: white;
    cursor: pointer;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Span = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 1.1666;
letter-spacing: 0.02em;
text-transform: uppercase;
color: ${props => props.theme.colors.mainTextColor};
`;