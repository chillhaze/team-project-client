import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  height: auto;
  background: ${props => props.theme.colors.white};
  background: white;
  box-shadow: 5px 10px 20px 0px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  padding: 40px 29px 53px 29px;
  font-weight: 400;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    width: 436px;
    padding: 50px 85px 53px 85px;
  }
  @media screen and (min-width: 1280px) {
    // width: 436px;
    // height: 635px;
    // padding: 50px 85px 53px 85px;
    margin-bottom: 50px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Span = styled.span`
  padding-left: 52px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`;

export const Text = styled.p`
  width: 222px;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 10px;
  text-align: start;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.mainTextColor};

  @media screen and (min-width: 768px) {
    width: 265px;
    font-size: 12px;
    // text-align: start;
  }
`;

export const Text1 = styled.p`
  width: 253px;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 10px;
  text-align: start;
  line-height: 1.2;
  letter-spacing: 0.04em;
  // margin-bottom: 20px;
  color: ${props => props.theme.colors.mainTextColor};

  @media screen and (min-width: 768px) {
    width: 265px;
    font-size: 12px;
    // text-align: start;
  }
`;

export const GoogleBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 122px;
  padding: 10px 20px;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  background: ${props => props.theme.colors.MainBgColor};
  border-color: transparent;
  border-radius: 26px;
  color: ${props => props.theme.colors.black};
  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));
  cursor: pointer;

  & > svg {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: 400;
  font-family: 'Montserrat';
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 24px;
  // margin-bottom: 12px;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-top: 20px;
    // margin-bottom: 10px;
    color: ${props => props.theme.colors.black};
  }
`;
export const Label1 = styled.label`
  display: inline-block;
  font-weight: 400;
  font-family: 'Montserrat';
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 30px;
  // margin-bottom: 12px;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 12px;
    // margin-top: 20px;
    // margin-bottom: 10px;
    color: ${props => props.theme.colors.black};
  }
`;

export const Errors = styled.span`
  font-weight: 400;
  font-size: 10px;
  font-family: 'Roboto';
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 5px;
  color: ${props => props.theme.colors.redText};
`;

export const Field = styled.input`
  width: 253px;
  padding: 17px 20px;
  border: 1px solid transparent;
  background: ${props => props.theme.colors.MainBgColor};
  border-radius: 30px;
  margin-top: 12px;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 265px;
    font-size: 14px;
    margin-top: 10px;
  }

  &:placeholder {
    color: #a6abb9;
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.accentColor};
  }
`;

export const FieldWrap = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

export const Eye = styled.i`
  position: absolute;
  top: 71%;
  right: 14%;

  &:hover {
    color: #00fcb6;
    cursor: pointer;
  }
`;
