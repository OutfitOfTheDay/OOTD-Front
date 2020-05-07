import styled from 'styled-components';
import { MainColor } from '../../../GlobalStyle';

export const ModalHeaderWrapper = styled.div`
  display: flex;
  width: inherit;
  height: 3.125rem;
  align-items: center;
  justify-content: space-between;
`;

export const ModalName = styled.p`
  color: ${MainColor};
  font-size: 1.125rem;
  font-weight: 800;
`;

export const closeButton = styled.img`
  width: 1.25em;
  height: 1.25em;
  background-color: #a8a8a8;
`;
