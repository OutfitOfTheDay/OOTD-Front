import styled from 'styled-components';

import { MainColor, DeactTextColor } from 'src/GlobalStyle';

export const TD = styled.td`
  padding: 0 1rem;
  vertical-align: top;
  box-sizing: border-box;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${DeactTextColor};
  text-align: center;
  cursor: pointer;

  :first-child {
    padding-left: 0px;
  }

  :last-child {
    padding-right: 0px;
  }

  &.selected {
    color: ${MainColor};
  }

  &.temp {
    font-size: 1.25rem;
    color: ${MainColor};
    > span {
      font-size: 0.75rem;
    }
  }

  > img {
    width: 3rem;
    display: inline-block;
    padding-bottom: 0.5rem;

    &.temp {
      width: 1.7rem;
    }
  }
`;
