import styled from '@emotion/styled';

const IconThumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -30px;

  & div:first-of-type {
    position: absolute;
    z-index: 1;
    color: #f5f6fb;
  }

  & div:last-of-type {
    position: absolute;
    z-index: 2;
    color: #071f41;
  }

  &:hover div:first-of-type {
    color: #ffdac0;
  }

  &:hover div:last-of-type {
    color: #ff751d;
  }
`;

export default IconThumb;
