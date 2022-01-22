import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 320px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    width: 768px;
  }

  @media only screen and (min-width: 1280px) {
    width: 1280px;
    height: 851px;
  }
`;

export const Header = styled.header`
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.white};
`;
