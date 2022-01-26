import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const WrapperReport = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 666px;
    padding-right: 50px;
    padding-left: 50px;
    margin-bottom: 30px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;

export const WrapperCategories = styled.ul`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (min-width: 1280px) {
    padding-right: 219px;
    padding-left: 219px;
  }
`;

export const ListItem = styled.li`
width: calc(100%/3-30px)
margin-left: 30px;
@media screen and (min-width: 768px){
  width:calc(100%/6-30px)
}
`;
