import styled from '@emotion/styled';
import bg from '../../images/mobile-bg-current-period.png';

export const Wrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Form = styled.form``;

export const BGImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  padding-bottom: 43px;
  margin-bottom: 40px;

  // @media screen and (min-width: 320px) {
  //   background-image: URL(${bg});
  //   background-size: 100%;

  //   background-repeat: no-repeat;
  // }
`;

export const InputWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
  }
`;

export const DescriptionInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  color: #c7ccdc;

  @media screen and (min-width: 320px) {
    justify-content: center;
    width: 282px;
    height: 44px;
    padding: 0;
    padding-left: 20px;
    margin: 0;

    border: 2px solid #ffffff;
    border-radius: 16px 16px 0 0;
    background-color: transparent;
  }

  width: 268px;
  height: 44px;
  padding: 2px 0 2px 20px;
  border: 2px solid #f5f6fb;
  border-radius: 16px 0 0 0px;
`;

export const SelectList = styled.select`
  font-family: Roboto;
  font-style: normal;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  color: #c7ccdc;

  @media screen and (min-width: 320px) {
    width: 282px;
    height: 44px;
    padding: 0;
    padding-left: 20px;
    margin: 0;

    border: 2px solid #ffffff;
    border-top: transparent;
    border-radius: 0 0 16px 16px;
    background-color: transparent;
  }

  border: 2px solid #f5f6fb;
  height: 44px;
  padding: 1px 20px;
`;

export const CategoryItem = styled.option`
  width: 188px;
  height: 44px;
  padding: 2px 0 2px 20px;
`;

export const AmountInput = styled.input`
  position: relative;
  width: 126px;
  height: 44px;
  padding: 2px 0 2px 50px;

  border: 2px solid #ffffff;
  border-radius: 16px 16px 16px 16px;
  background-color: transparent;
  color: #000000;

  @media screen and (min-width: 768px) {
    border-radius: 0 16px 16px 0;
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  color: #ffffff;
  background-color: #ff751d;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);

  &:hover,
  &:focus {
    color: #52555f;
    background-color: transparent;
    border: 2px solid #f5f6fb;
  }
`;

export const ClearButton = styled.button`
  width: 125px;
  height: 44px;
  padding: 12px 25px;
  border: 2px solid #f5f6fb;
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
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #ff751d;
    border: 2px solid #ff751d;
  }
`;
