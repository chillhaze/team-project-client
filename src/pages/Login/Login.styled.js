import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
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
    margin-top: 90px;
    margin-left: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 227px;
    margin-bottom: 195px;
    margin-left: 0px;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  font-family: 'Roboto';
  line-height: 1.3;
  color: ${props => props.theme.colors.black};
  // padding-left: 49px;
  // padding-right: 88px;

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
