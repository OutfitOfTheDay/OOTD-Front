import styled from 'styled-components';

import { MainColor, SubColor } from 'src/GlobalStyle';

export const BlockContainer = styled.ul<{ isLogin: boolean }>`
  width: 11.25rem;
  height: ${props => (props.isLogin ? '7.5rem' : '3.75rem')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px ${MainColor};
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
