import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  padding-top: 35px;
`;

export const Form = styled.form`
  display: flex;
  margin: 0;

  font-family: Roboto;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
`;

export const TodayDate = styled.p`
  margin-right: 23px;
`;

export const InputWrapper = styled.div`
  padding: 0;
  margin: 0;
  margin-right: 27px;
`;

export const DescriptionInput = styled.input`
  width: 268px;
  height: 44px;
  padding: 2px 0 2px 20px;
  border: 2px solid #f5f6fb;
  border-radius: 16px 0 0 0px;
`;

export const SelectList = styled.select`
  border: 2px solid #f5f6fb;
  height: 44px;
  padding: 1px 20px;

  color: #c7ccdc;
`;

export const CategoryItem = styled.option`
  width: 188px;
  height: 44px;
  padding: 2px 0 2px 20px;
`;

export const AmountInput = styled.input`
  width: 126px;
  height: 44px;
  padding: 2px 0 2px 2px;
  border: 2px solid #f5f6fb;
  border-radius: 0px 16px 16px 0px;
`;

export const Buttons = styled.div`
  display: flex;
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
`;
