import styled from '@emotion/styled';
import bg from '../../../images/mobile-bg-current-period.png';
import bgTablet from '../../../images/background-tablet.png';
import bgDesktop from '../../../images/background-desktop.png'

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

@media screen and (min-width:1280px){
width:1280px;
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

@media screen and (min-width:1280px){
width:1280px;
height:583px;
padding:40px 110px;
background-image:URL(${bgDesktop});
}
`;

export const TabletWrapper = styled.div`
display:flex;
align-items:center;
margin-top:40px;
margin-bottom:30px;
width:664px;

@media screen and (min-width:1280px){
width:1060px;
height:44px;
margin-top:0;

}
`;