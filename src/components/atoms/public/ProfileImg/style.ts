import styled from 'styled-components';

import { MainColor } from 'src/GlobalStyle';

export const img = styled.img<{ size: number; isShadow?: true }>`
  width: ${props => props.size / 16}rem;
  height: ${props => props.size / 16}rem;
  border: solid 1px ${MainColor};
  ${props => props.isShadow && 'box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);'}

  &.header {
    position: absolute;
    top: 50%;
    margin-top: -${props => props.size / 32}rem;
    right: 1.25rem;
    cursor: pointer;
  }
`;
