import styled from '@emotion/styled';

export const Wrapper = styled.div`
@media screen and (min-width:768px){
    display:flex;
    align-items:center;
    margin-left:220px;
    margin-right:80px;
    height:44px;
}

@media screen and (min-width:1280px){
    margin-left:310px;
    margin-right:240px;
    height:44px;
}
`;

export const BalanceTitle = styled.h3`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.1666;
letter-spacing: 0.02em;
text-align:center;
margin-bottom:5px;

color: rgba(82, 85, 95, 0.7);

@media screen and (min-width:768px){
    margin-right:20px;
};

`;

export const BalanceWrapper = styled.div`
width:182px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border: 2px solid #FFFFFF;
border-radius: 22px;
margin-bottom: 40px;

@media screen and (min-width:768px){
    margin-bottom:0;
    width:125px;
    border-radius: 16px;
}
`;

export const BalanceAmount = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 1.1666;
letter-spacing: 0.02em;
text-transform: uppercase;

color: #000000;
`;