import styled from 'styled-components';

import { DeactTextColor, MainColor } from 'src/GlobalStyle';

export const TD = styled.td`
  padding: 0 0.5rem;
  vertical-align: top;
  box-sizing: border-box;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${DeactTextColor};
  text-align: center;

  :first-child {
    padding-left: 0px;
  }

  :last-child {
    padding-right: 0px;
  }

  &.selected {
    color: ${MainColor};
  }
`;

export const weatherIcon = styled.img`
  width: 2.5rem;
  display: inline-block;
`;
