import styled from '@emotion/styled';
import bg from '../../../images/mobile-bg-current-period.png';
import bgTablet from '../../../images/background-tablet.png';
import bgDesktop from '../../../images/background-desktop.png';

export const Wrapper = styled.div`
  width:280px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width:768px){
    width:100%;
  }
`;

export const CurrentPeriodWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TabletWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 30px;
  width: 664px;

  @media screen and (min-width: 1280px) {
    width: 1060px;
    height: 44px;
    margin-top: 0;
  }
`;

export const HederReport = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    margin-left: auto;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    width: 1060px;
    height: 44px;
    margin-top: 0;
  }
`;
