import styled from "@emotion/styled";
import bg from 'images/mobile-bg-current-period.png';
import bgTablet from 'images/background-tablet.png';
import bgDesktop from 'images/background-desktop.png';
import cabbageDesk from 'images/cabbage-desktop.png';
import twoCabagesDesk from 'images/two-cabbages-desk.png';

export const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 20px 50px;
  background-image: URL(${bg});
  background-repeat: no-repeat;
  background-position-y: -55px;
  position:relative;
display:flex;
flex-direction:column;
align-items:center;

    @media only screen and (min-width: 768px) {
    width: 768px;
    height:auto;
    padding: 40px 50px 75px;
    background-image: url(${twoCabagesDesk}),URL(${bgTablet});
    background-position: bottom 64px right 88px, top -55px left 0px;
  }

  @media only screen and (min-width: 1280px) {
    width: 1280px;
    height: 1134px;
    padding:40px 110px;
    background-image: URL(${cabbageDesk}), URL(${bgDesktop}); 
    background-position: bottom 0px left 10px, top -55px left 0px;
  }
  `;