import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: calc(100vh - 83px);
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
