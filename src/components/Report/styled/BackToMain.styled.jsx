import styled from '@emotion/styled';

export const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position:absolute;
  top:22px;
  left:22px;
  z-index:1;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: ${props => props.theme.colors.mainTextColor};

    display: flex;
    align-items: center;

    svg {
      margin-right: ${props => props.theme.spacing(4.5)};
    }
  }
`;
