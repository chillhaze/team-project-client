import styled from '@emotion/styled';
import bg from '../../../images/mobile-bg-current-period.png';

export const Wrapper = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
margin:0 auto;
padding:0;
max-width:320px;
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
`;