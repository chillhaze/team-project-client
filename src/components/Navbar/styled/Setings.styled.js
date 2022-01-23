import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
`;
export const SetingsWrapper = styled.div`
  height: ${props => (props.isOpen ? '150px' : '0')};
  width: 300px;
  overflow: hidden;
  position: absolute;
  top: 23;
  right: 0;
  border: ${props => (props.isOpen ? '1px black solid' : 'none')};
  background-color: ${props => props.theme.colors.MainBgColor};
  z-index: 111;
  transition: height, 0.7s;
`;
