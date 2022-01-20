import styled from '@emotion/styled';



export const Wrapper = styled.div`
margin-top:50px;

@media screen and (min-width:768px){
    order:2;
    margin-top:0px;
}

@media screen and (min-width:1280px){
margin-left:auto;
}
 `;

export const ArrowBackBtn = styled.button`
border:transparent;
background-color:transparent;
margin:0 10px;
display:flex;
align-items:center;
`;

export const DateContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:30px;

@media screen and (min-width:768px){
margin-bottom:0;
}
`;

export const PeriodTitle = styled.h3`
margin-bottom:5px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 1.1666;

text-align: center;
letter-spacing: 0.04em;

color: rgba(82, 85, 95, 0.7);
`;

export const BalancePeriod = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

color: ${props=>props.theme.colors.black};
`;

export const BalancePeriodWrapper = styled.div`
width:120px;
`;