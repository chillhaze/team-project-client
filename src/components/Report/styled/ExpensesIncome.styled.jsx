import styled from '@emotion/styled';

export const Wrapper = styled.div`
position:relative;
width:282px;
height:85px;
padding:24px 12px;
background-color:${props => props.theme.colors.white};
box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
border-radius: 20px;
align-items:center;

`;

export const List = styled.ul`
display:flex;
align-items:center;
justify-content:space-around;
`;

export const Item = styled.li`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
`;

export const Text = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 1.1666;

color: #52555F;

`;

export const AmountRed = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.04em;

color: #E53935;
`;

export const AmountGreen = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.04em;
color: #407946;
`;

export const Bar = styled.svg`
position:absolute;
top:8px;
left:140px;
`;