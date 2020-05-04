import styled from 'styled-components';
import { SubColor } from '../../../GlobalStyle';

export const LoginModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 17.5rem;
  background-color: #fff;
  border: 1px solid ${SubColor};
  flex-direction: column;
  align-items: center;
  z-index: 1000;
`;

export const LoginButtonsWrapper = styled.div`
  display: flex;
  height: 10rem;
  margin-top: 1.875rem;
  flex-direction: column;
  justify-content: space-between;
`;
