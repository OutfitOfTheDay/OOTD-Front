import styled from 'styled-components';

export const MoveButton = styled.img<{ isRight: boolean }>`
  position: absolute;
  ${(props) => (props.isRight ? 'right: 2%;' : 'left: 2%;')}
  top: 50%;
  width: 1.875rem;
  height: 1.875rem;
`;
