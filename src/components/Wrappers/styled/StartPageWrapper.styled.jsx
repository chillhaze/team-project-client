import styled from "@emotion/styled";
import bg from '../../../images/mobile-bg-current-period.png';
import bgTablet from '../../../images/background-tablet.png';
import bgDesktop from '../../../images/background-desktop.png';
import cabbageDesk from '../../../images/cabbage-desktop.png';
import twoCabagesDesk from '../../../images/two-cabbages-desk.png';
import oneCabbage from '../../../images/oneCabbage.png';
import smallCabbage from '../../../images/smallCabbage.png';

export const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  background-image: URL(${bg});
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
  }
  `;

  export const Cabbage = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 55px;
    height: 89px;
    top: 190px;
    right: 0px;
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
    z-index:1;
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
background - position: center;
  
  @media screen and (min-width: 768px) {
    display: none;
    width: 0;
    height: 0;
    display: none;
    z-index: -10;
  }
`;