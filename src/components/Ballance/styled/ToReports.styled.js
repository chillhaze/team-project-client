import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)``;

export const ToReportsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    margin-bottom: ${props => props.theme.spacing(11)};
  }

  @media only screen and (min-width: 1024px) {
    position: absolute;
    right: 60px;
    top: 14px;
  }
`;

export const Text = styled.span`
  font-family: Roboto;
  font-weight: 500px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.mainTextColor};
  margin-right: ${props => props.theme.spacing(4)};
`;
