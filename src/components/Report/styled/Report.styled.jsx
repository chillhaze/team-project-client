import styled from '@emotion/styled';
import bg from '../../../images/mobile-bg-current-period.png';
import bgTablet from '../../../images/background-tablet.png';

export const Wrapper = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
margin:0 auto;
padding:0;
width:320px;

@media screen and (min-width:768px){
width:768px;
}
`;

export const CurrentPeriodWrapper = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
width:320px;
height:342px;
background-image:URL(${bg});
background-position-y:-55px;
background-repeat:no-repeat;

@media screen and (min-width:768px){
width:768px;
height:527px;
background-image:URL(${bgTablet});
}
`;

export const TabletWrapper = styled.div`
display:flex;
align-items:center;
margin-top:40px;
margin-bottom:30px;
`;