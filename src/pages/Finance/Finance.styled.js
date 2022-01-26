import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 280px;
  position: relative;
  height: calc(100vh - 83px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 665px;
  }
  @media screen and (min-width: 1280px) {
    width: 1060px;
    justify-content: flex-start;
  }
`;
