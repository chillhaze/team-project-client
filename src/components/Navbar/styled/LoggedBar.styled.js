import styled from '@emotion/styled';

export const LoggedContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 15px;
    @media only screen and (min-width: 768px) {
      margin-right: 15px;
    }
  }
`;

export const UserName = styled.span`
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  position: relative;

  margin-right: ${props => props.theme.spacing(10)};

  ::after {
    position: absolute;
    right: -19px;
    top: -13px;
    width: 0px;
    height: 36px;

    border: 1px solid #e0e5eb;
    content: '';
  }
`;

export const ExitBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  @media only screen and (min-width: 768px) {
    color: ${props => props.theme.colors.black};

    text-decoration: underline;
  }
`;
