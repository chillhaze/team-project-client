import styled from '@emotion/styled';

export const Button = styled.button`
  width: 125px;
  height: 44px;
  border-radius: 16px;
  margin: 0;
  border: 2px solid ${props => props.theme.colors.MainBgColor};
  background-color: inherit;

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
