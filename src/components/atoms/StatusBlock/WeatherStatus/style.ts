import styled from 'styled-components';

import { MainColor } from '../../../../GlobalStyle';

export const TD = styled.td`
  padding: 0 8px;
  vertical-align: top;
  box-sizing: border-box;
  font-size: 14px;
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
  width: 40px;
  display: inline-block;
`;
