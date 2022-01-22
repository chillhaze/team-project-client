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

@media screen and (min-width:768px){
    width:668px;
    height:50px;
    padding:10px;
    margin-bottom:30px;
}

@media screen and (min-width:1280px){
    width:1060px;
    height:50px;
    padding:10px;
}
`;

export const List = styled.ul`
display:flex;
align-items:center;
justify-content:space-around;
@media screen and (min-width:768px){
    padding:8px;
    justify-content:center;
}
`;

export const Item = styled.li`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;

@media screen and (min-width:768px){
    flex-direction:row;
    &:nth-of-type(1){
        margin-right:15px;
    }
    &:nth-of-type(2){
        margin-left:15px;
    }
}
`;

export const Text = styled.p`
font-weight: bold;
font-size: 14px;
line-height: 1.1666;

color: ${props => props.theme.colors.mainTextColor}
@media screen and (min-width:768px){
    margin-right:15px;;
}

`;

export const AmountRed = styled.span`
font-weight: bold;
font-size: 14px;
line-height: 1.1666;
letter-spacing: 0.04em;

color: ${props => props.theme.colors.redBalance};
`;

export const AmountGreen = styled.span`
font-weight: bold;
font-size: 14px;
line-height: 1.1666;
letter-spacing: 0.04em;
color: ${props => props.theme.colors.green};
`;

export const Bar = styled.svg`
position:absolute;
top:8px;
left:140px;

@media screen and (min-width:768px){
    top:7px;
    left:334px;
    height:36px;
}
@media screen and (min-width:768px){
    left:530px;
    height:36px;
}
`;