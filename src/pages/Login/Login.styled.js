import styled from '@emotion/styled';
import bg from '../../images/mobile-bg-current-period.png';
import bgTablet from '../../images/background-tablet.png';
import bgDesktop from '../../images/background-desktop.png';
import cabbageDesk from '../../images/cabbage-desktop.png';
import twoCabagesDesk from '../../images/two-cabbages-desk.png';
import oneCabbage from '../../images/oneCabbage.png';
import smallCabbage from '../../images/smallCabbage.png';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 320px;
  margin: 0 auto;
  background-image: URL(${bg});
  /* background-position: top 85px left 0px; */

  background-repeat: no-repeat;

  @media only screen and (min-width: 768px) {
    width: 768px;
    background-image: URL(${cabbageDesk}), URL(${bgTablet});
    background-position: top 35px left 0px, top 0px left 0px;
  }

  @media only screen and (min-width: 1280px) {
    width: 1280px;
    height: 851px;
    background-image: URL(${cabbageDesk}), URL(${bgDesktop}),
      url(${twoCabagesDesk});
    background-position: top 50px left 10px, top -10px left 0px,
      bottom 0px left 200px;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding-left: 49px;
  margin-top: 86px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: auto;
    padding-right: 205px;
    /* margin-top: 90px; */
    margin-left: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 420px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 65px;
    margin-left: 175px;
    margin-right: 127px;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  font-family: 'Roboto';
  line-height: 1.3;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-weight: 900;
    font-size: 78px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 900;
    font-size: 102px;
    line-height: 1.2;
  }
`;

export const TitleSpan = styled.span`
  font-size: 43px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 75px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 85px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-family: 'Roboto';
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.18em;
  margin-left: 11px;
  margin-bottom: 50px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.mainTextColor};

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.18em;
    margin-left: 54px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 0.18em;
    margin-right: 77px;
    text-transform: uppercase;
  }
`;

export const Cabbage = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 83px;
    height: 89px;
    top: 120px;
    right: -17px;
    background-image: url(${oneCabbage});
    background-repeat: no-repeat;
    background-position: center;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 183px;
    height: 142px;
    bottom: -95px;
    left: 100px;
    background-image: url(${twoCabagesDesk});
    background-repeat: no-repeat;
    background-position: center;
  }
  @media screen and (min-width: 1280px) {
    width: 0;
    height: 0;
    display: none;
    z-index: -10;
  }
`;

export const CabbageBottom = styled.div`
  position: absolute;
  bottom: -70px;
  left: 35px;
  width: 83px;
  height: 89px;
  z-index: -1;
  background-image: url(${smallCabbage});
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 768px) {
    display: none;
    width: 0;
    height: 0;
    display: none;
    z-index: -10;
  }
`;
