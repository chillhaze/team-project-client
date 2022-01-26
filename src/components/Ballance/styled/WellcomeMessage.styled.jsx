import styled from '@emotion/styled';
import backgroundMessage from '../../../images/backgroundMessage.png';

export const Wrapper = styled.div`
  position: absolute;
  max-width: 282px;
  max-height: 163px;
  transform: translate(6%, 7%);
  z-index: 100;

  @media only screen and (min-width: 768px) {
    transform: translate(10%, 95%);
  }
  @media only screen and (min-width: 1280px) {
    transform: translate(12%, 75%);
  }
`;

export const Text = styled.div`
  max-height: 152px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  border-radius: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: ${props => props.theme.colors.white};
  &::before {
    content: ' ';
    position: absolute;
    width: 30px;
    height: 16px;
    background-image: url(${backgroundMessage});
    background-repeat: no-repeat;
    transform: translate(75px, -12px);
  }
`;
export const TextMessage = styled.p`
  padding: 41px 25px 20px 25px;
`;

export const TextMessagePart = styled.p`
  padding: 0px 25px 31px 25px;
  font-size: 12px;
  line-height: 16px;
`;
