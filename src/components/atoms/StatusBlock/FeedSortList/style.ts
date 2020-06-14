import styled from 'styled-components';

import { MainColor, DeactTextColor } from 'src/GlobalStyle';

export const list = styled.ul`
  margin-bottom: 1rem;
`;

export const listItem = styled.li<{ isSelected: boolean }>`
  font-family: 'Play Pretend';
  font-size: 1.25rem;
  color: ${({ isSelected }) => (isSelected ? MainColor : DeactTextColor)};
  cursor: pointer;

  &:hover {
    color: ${MainColor};
  }
`;
