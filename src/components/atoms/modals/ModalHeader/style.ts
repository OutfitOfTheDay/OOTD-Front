import styled from 'styled-components';
import { MainColor } from '../../../../GlobalStyle';

export const ModalHeaderWrapper = styled.div<{ isLogin: boolean }>`
  display: flex;
  width: inherit;
  height: 3.125rem;
  align-items: center;
  justify-content: ${(props) => (props.isLogin ? 'flex-end' : 'space-between')};
`;

export const ModalName = styled.p<{ isLogin: boolean }>`
  color: ${MainColor};
  font-size: 1.125rem;
  font-weight: 800;
  margin-right: ${(props) => (props.isLogin ? ' 8.813rem' : '0')};
`;

export const closeButton = styled.img`
  width: 1.25em;
  height: 1.25em;
  cursor: pointer;
`;
