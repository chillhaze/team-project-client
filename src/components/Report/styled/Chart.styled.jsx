import styled from '@emotion/styled';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    width: 1060px;
  }
`;

export const BgrReport = styled.div`
width: 320px;
  @media screen and (min-width: 768px) {
   width: 666px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 30px;
  padding-top: 25px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  background-color: ${props => props.theme.colors.white};
  background: linear-gradient(
    to top,
    ${props => props.theme.colors.white} 0%,
    ${props => props.theme.colors.white} 11.5%,
    ${props => props.theme.colors.MainBgColor} 11.5%,
    ${props => props.theme.colors.MainBgColor} 12%,
    ${props => props.theme.colors.white} 12%,
    ${props => props.theme.colors.white} 22.5%,
    ${props => props.theme.colors.MainBgColor} 22.5%,
    ${props => props.theme.colors.MainBgColor} 23%,
    ${props => props.theme.colors.white} 23%,
    ${props => props.theme.colors.white} 33.6%,
    ${props => props.theme.colors.MainBgColor} 33.5%,
    ${props => props.theme.colors.MainBgColor} 34%,
    ${props => props.theme.colors.white} 34%,
    ${props => props.theme.colors.white} 44.6%,
    ${props => props.theme.colors.MainBgColor} 44.5%,
    ${props => props.theme.colors.MainBgColor} 45%,
    ${props => props.theme.colors.white} 45%,
    ${props => props.theme.colors.white} 55.5%,
    ${props => props.theme.colors.MainBgColor} 55.5%,
    ${props => props.theme.colors.MainBgColor} 56%,
    ${props => props.theme.colors.white} 56%,
    ${props => props.theme.colors.white} 66.5%,
    ${props => props.theme.colors.MainBgColor} 66.5%,
    ${props => props.theme.colors.MainBgColor} 67%,
    ${props => props.theme.colors.white} 67%,
    ${props => props.theme.colors.white} 77.6%,
    ${props => props.theme.colors.MainBgColor} 77.5%,
    ${props => props.theme.colors.MainBgColor} 78%,
    ${props => props.theme.colors.white} 78%,
    ${props => props.theme.colors.white} 88.5%,
    ${props => props.theme.colors.MainBgColor} 88.5%,
    ${props => props.theme.colors.MainBgColor} 89%,
    ${props => props.theme.colors.white} 89%,
    ${props => props.theme.colors.white} 100%
  );
  @media screen and (min-width: 1024px) {
   width: 758px;
`;
