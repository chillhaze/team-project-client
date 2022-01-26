import styled from '@emotion/styled';
import bg from '../../images/mobile-bg-current-period.png';

export const Form = styled.form``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 59px;
  }
`;

export const BGImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  padding-bottom: 43px;
  margin-bottom: 40px;

  /* background-image: URL(${bg}); */
  // background-size: 100%;
  /* background-repeat: no-repeat; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 30px;

    background-image: none;
  }

  @media screen and (min-width: 1280px) {
    margin: 0;
    margin-right: 27px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const DescriptionInput = styled.input`
  justify-content: center;
  width: 282px;
  height: 44px;
  padding: 0;
  padding-left: 20px;
  margin: 0;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  outline: none;

  border: 2px solid #ffffff;
  border-radius: 16px 16px 0 0;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    width: 192px;
    padding: 2px 0 2px 20px;
    border-color: #f5f6fb;
    border-radius: 16px 0 0 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 289px;
  }
`;

export const SelectList = styled.select`
  width: 282px;
  height: 44px;
  padding: 0;
  padding-left: 20px;
  margin: 0;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  outline: none;

  border: 2px solid #ffffff;
  border-top: transparent;
  border-radius: 0 0 16px 0px;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    width: 171px;
    border-radius: 0;
    border: 2px solid #f5f6fb;
    border-left: none;
    border-right: none;
  }

  @media screen and (min-width: 1280px) {
    width: 188px;
    color: #c7ccdc;
  }

  // border: 2px solid #f5f6fb;
  // padding: 1px 20px;
`;

export const CategoryItem = styled.option`
  width: 188px;
  height: 44px;
  padding: 2px 0 2px 20px;

  @media screen and (min-width: 768px) {
    color: #c7ccdc;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AmountInput = styled.input`
  width: 125px;
  padding-right: 17px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  outline: none;
  text-align: end;
  border: 2px solid #ffffff;
  border-radius: 16px 0 0 16px;
  background-color: inherit;
  color: #000000;

  @media screen and (min-width: 768px) {
    width: 64px;
    border-color: #f5f6fb;
    border-radius: 0;
    border-right: none;

    color: #c7ccdc;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 0;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 104px;
  }

  @media screen and (min-width: 1280px) {
    width: 126px;
  }
`;

export const CalcConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 44px;
  border: 2px solid #ffffff;
  border-left: none;
  border-radius: 0 16px 16px 0;

  @media screen and (min-width: 768px) {
    padding-right: 12px;
    border-color: #f5f6fb;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    padding-left: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0;
    padding: 0;
  }
`;

export const EnterButton = styled.button`
  width: 125px;
  height: 44px;
  margin-right: 15px;
  padding: 12px 34px;
  border: 2px solid #ff751d;
  border-radius: 16px;

  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #52555f;
  background-color: transparent;
  border: 2px solid #f5f6fb;
  transition: background-color 250ms linear, color 250ms linear, border 250ms linear;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ff751d;
    border: 2px solid #ff751d;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ClearButton = styled.button`
  width: 125px;
  height: 44px;
  padding: 12px 25px;
  border: 2px solid #f6f7fc;
  border-radius: 16px;

  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #52555f;
  background-color: transparent;
  transition: background-color 250ms linear, color 250ms linear, border 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #ff751d;
    border: 2px solid #ff751d;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
