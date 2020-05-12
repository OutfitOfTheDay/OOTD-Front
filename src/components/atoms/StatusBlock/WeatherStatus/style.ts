import styled from 'styled-components';

import { MainColor } from '../../../../GlobalStyle';

export const TD = styled.td`
  padding: 0 0.5rem;
  vertical-align: top;
  box-sizing: border-box;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${MainColor};
  text-align: center;
  cursor: pointer;

  :first-child {
    padding-left: 0px;
  }

  :last-child {
    padding-right: 0px;
  }
`;

export const weatherIcon = styled.img`
  width: 2.5rem;
  display: inline-block;
`;
