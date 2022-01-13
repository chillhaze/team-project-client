import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-width: 320px;
  max-width: 480px;
  margin: 0 auto;



@media only screen and (min-width: 768px) {
   
    max-width: 768px;


}

@media only screen and (min-width: 1024px) {
 
    max-width: 1280px;

}

`;

export const Header = styled.header`
padding: ${props => props.theme.spacing(6)} ${props =>  props.theme.spacing(3)};
background-color: ${props => props.theme.white};
`
