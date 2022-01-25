import styled from '@emotion/styled';


export const Wrapper = styled.div``;

export const WrapperReport = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 666px;
    margin-right: 50px;
    margin-left: 50px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
  @media screen and (min-width: 1024px) {
    margin-right: 110px;
    margin-left: 110px;
  } ;
`;

export const WrapperCategories = styled.ul`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
