import styled from 'styled-components';

export const ModalButton = styled.button<{ isCancel: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.isCancel ? '#e74c3c' : '#a8a8a8')};
  font-weight: 800;
`;
