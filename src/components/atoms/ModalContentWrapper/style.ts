import styled from 'styled-components';
import { SubColor } from '../../../GlobalStyle';

export const ModalWrapper = styled.div<{
  modalWidth: string;
  modalHeight: string;
}>`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.modalWidth};
  height: ${(props) => props.modalHeight};
  padding: 0 1.25rem;
  background-color: #fff;
  color: #707070;
  border: 1px solid ${SubColor};
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
`;
