import styled from '@emotion/styled';

export const Wrapper = styled.div`
  flex-basis: calc(100% / 3);

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 6);
  }
`;

export const ButtonCategory = styled.button`
  max-width: 102px;
  height: 120px;
  border: none;

  background-color: ${props => props.theme.colors.white};
`;

export const Category = styled.p`
  padding-bottom: 66px;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.mainTextColor};
`;
export const CategoryName = styled.p`
  min-height: 36px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.mainTextColor};
`;
