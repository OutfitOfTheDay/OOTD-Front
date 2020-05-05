import styled from 'styled-components';

import { MainColor } from 'src/GlobalStyle';

export const resetItemsWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const resetIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
`;

export const resetText = styled.p`
  display: inline;
  font-size: 12px;
  font-weight: bold;
  color: ${MainColor};
`;
