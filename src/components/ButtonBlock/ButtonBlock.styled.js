import styled from '@emotion/styled';
export const ButtonBlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 265px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 125px;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  border: none;
  border-radius: 16px;

  background-color: ${props => props.theme.colors.mainBgColor};
  color: ${props => props.theme.colors.mainTextColor};
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  transition-property: color, background-color, filter;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  font-size: 12px;
  font-weight: 500;
  line-height: 1.67;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accentColor};
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
    color: ${props => props.theme.colors.white};
  }
`;
