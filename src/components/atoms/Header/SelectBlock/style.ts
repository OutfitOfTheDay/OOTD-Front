import styled from 'styled-components';

import { MainColor, SubColor } from 'src/GlobalStyle';

export const BlockContainer = styled.ul<{
  isClicked: boolean;
  isLogin: boolean;
}>`
  width: 11.25rem;
  height: ${({ isLogin }) => (isLogin ? '7.5rem' : '3.75rem')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px ${MainColor};
  background: white;
  position: absolute;
  z-index: 1;
  top: 4rem;
  right: 0.875rem;
  ${({ isClicked }) => !isClicked && 'visibility: hidden'};
`;

export const ListItem = styled.li`
  font-family: 'Play Pretend';
  font-size: 1.5rem;
  color: ${SubColor};
  -webkit-text-stroke: 1px ${MainColor};
  cursor: pointer;

  &:hover {
    color: ${MainColor};
  }

  &:nth-child(2) {
    margin-top: 1.5rem;
  }
`;
