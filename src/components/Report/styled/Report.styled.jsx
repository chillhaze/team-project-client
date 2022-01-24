import styled from '@emotion/styled';

export const Wrapper = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
`;

export const CurrentPeriodWrapper = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
width:100%;
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