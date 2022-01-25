import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
     padding-top: 20px;
`;

export const NameReport = styled.p`
  padding-right: 15px;
  padding-left: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;
export const SwitcherReport = styled.button`
  border: none;
  background-color: ${props => props.theme.colors.white};
display:flex;
justify-content:center;
align-items:baseline;
margin-bottom:30px;
`;

export const Button = styled.button`
background-color:transparent;
border:none;
margin:0 15px;
`;

export const Text = styled.p`
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

color: #000000;
`;
