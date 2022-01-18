import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 300px;
  height: 194px;
  margin: 0 auto;
  padding: 50px 10px;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  background-color: ${props => props.theme.colors.white};
  @media screen and (min-width: 768px) {
    width: 380px;
    padding: 50px 58px;
  }
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1428;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.mainTextColor};
`;

export const ExitBtn = styled.button`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
