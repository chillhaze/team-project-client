import styled from '@emotion/styled';
import bgrMobile from '../../images/bgrMobile.png';
import bgrTablet from '../../images/bgrTablet.png';
import bgrDesktop from '../../images/bgrDesktop.png';
import bgrDecoreMobile from '../../images/bgrDecoreMobile.png';
import bgrDecoreTablet from '../../images/bgrDecoreTablet.png';
import bgrDecoreDesktop from '../../images/bgrDecoreDesktop.png';
import bgrDecore from '../../images/bgrDecore.png';

export const Wrapper = styled.div`
  min-width: 320px;
  max-width: 480px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1280px;
  }
`;

export const Header = styled.header`
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.white};
`;

export const Background = styled.div`
  position: relative;
  min-width: 320px;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${bgrMobile});
  background-repeat: no-repeat;
  background-size: 100vw 286px;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    // height: 582px;
    background-image: url(${bgrTablet});
    background-size: 100vw 526px;
  }

  @media only screen and (min-width: 1024px) {
    // height: 794px;
    max-width: 1280px;
    background-image: url(${bgrDesktop});
    background-size: 100vw 526px;
  }
  &::before {
    position: absolute;
    content: '';
    width: 83px;
    height: 89px;
    background-image: url(${bgrDecoreMobile});
    transform: translate(300px, 35px) rotate(180deg);

    @media only screen and (min-width: 768px) {
      background-image: url(${bgrDecoreTablet});
      position: absolute;
      transform: translate(0px, 35px);
      content: '';
      width: 768px;
      height: 232px;
    }

    @media only screen and (min-width: 1024px) {
      max-width: 1280px;
      background-image: url(${bgrDecoreDesktop});
      position: absolute;
      transform: translate(0px, 35px);
      content: '';
      width: 100vw;
      height: 232px;
    }
  }
  &::after {
    position: absolute;
    content: '';
    width: 83px;
    height: 89px;
    background-image: url(${bgrDecoreMobile});
    rotate: (180 deg);
    transform: translate(34px, 550px);

    @media only screen and (min-width: 768px) {
      width: 183px;
      height: 142px;
      background-image: url(${bgrDecore});
      transform: translate(34px, 550px);
    }
  }
`;

export const DecorativeImageTablet = styled.div`
  padding-left: 103px;
  padding-bottom: 28px;

  @media only screen and (min-width: 1024px) {
    padding-left: 230px;
    padding-bottom: 50px;
  }
`;
