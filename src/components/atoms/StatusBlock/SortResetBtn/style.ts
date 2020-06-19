import styled from 'styled-components';

import { MainColor } from 'src/GlobalStyle';

export const resetItemsWrapper = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const resetIcon = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.25rem;
`;

export const resetText = styled.p`
  display: inline;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${MainColor};
`;
