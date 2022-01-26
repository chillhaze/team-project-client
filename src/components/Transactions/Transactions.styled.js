import styled from '@emotion/styled';
import Calendar from '../Calendar/Calendar';
import bg from '../../images/mobile-bg-current-period.png';

export const Wrapper = styled.div`
  position: relative;
  padding: ${props => (props.isMobile ? '0px' : '30px')};
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;

  @media screen and (max-width: 767px) {
    padding: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 1060px;
    height: 579px;
    padding: 33px 20px 33px 20px;
  }
`;

export const TabletForm = styled.div`
  display: flex;
  justify-content: center;
  background-image: URL(${props => props.isMobile && bg});

  /* background-image: URL(${bg}); */
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const ButtonsWrapper = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 0;
    display: flex;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -40px;
    left: 0;
  }
`;

export const BtnExpences = styled.button`
  width: 159px;
  height: 53px;
  margin-right: 2px;
  text-align: center;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  background-color: #f5f6fb;
  color: #000000;

  &:hover,
  &:focus {
    background-color: #ff751d;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;
    margin: 0;

    border-radius: 20px 20px 0 0;
    background-color: #fafbfd;

    &:hover,
    &:focus {
      background-color: #fefefe;
      color: #ff751d;
    }
  }
`;

export const BtnIncome = styled.button`
  width: 159px;
  height: 53px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  background-color: #f5f6fb;
  color: #000000;

  &:hover,
  &:focus {
    background-color: #ff751d;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;

    border-radius: 20px 20px 0 0;
    background-color: #fafbfd;

    &:hover,
    &:focus {
      background-color: #fefefe;
      color: #ff751d;
    }
  }
`;

export const Thumb = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;
