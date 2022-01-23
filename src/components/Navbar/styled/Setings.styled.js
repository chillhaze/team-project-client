import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  margin-right: 15px;
`;
export const SetingsWrapper = styled.div`
  height: ${props => (props.isOpen ? '150px' : '0')};
  padding: 0 ${props => props.theme.spacing(4)};
  width: 450px;
  box-sizing: border-box;

  overflow: hidden;
  position: absolute;
  top: 23;
  right: 0;
  border: ${props => (props.isOpen ? '1px black solid' : 'none')};
  background-color: ${props => props.theme.colors.MainBgColor};
  z-index: 111;
  transition: height, 0.7s;
`;

export const SetingsBtn = styled.button`
  width: 25px;
  height: 25px;
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  fill: ${props => props.theme.colors.black};

  &:hover {
    fill: ${props => props.theme.colors.accentColor};
  }

  svg {
    fill: inherit;
  }
`;

export const NameText = styled.span`
  display: inline-block;
  margin-top: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.mainTextColor};
  margin-right: ${props => props.theme.spacing(2.5)};
`;

export const ChangeNameInput = styled.input`
  margin-top: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.mainTextColor};
  margin-right: ${props => props.theme.spacing(2.5)};
`;

export const UserNameText = styled.span`
  color: ${props => props.theme.colors.mainTextColor};
  margin-right: ${props => props.theme.spacing(2.5)};
  font-weight: 700;
`;

export const EditBtn = styled.button`
  width: 25px;
  height: 25px;
  border: none;

  background-color: transparent;

  cursor: pointer;
  fill: ${props => props.theme.colors.black};

  &:hover {
    fill: ${props => props.theme.colors.accentColor};
  }

  svg {
    fill: inherit;
  }
`;
