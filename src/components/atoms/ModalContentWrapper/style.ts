import styled from 'styled-components';
import { SubColor } from '../../../GlobalStyle';

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  background-color: #fff;
  border: 1px solid ${SubColor};
  flex-direction: column;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.p`
  padding: 25px 50px;
`;
