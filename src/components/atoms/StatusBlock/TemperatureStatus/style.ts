import styled from 'styled-components';

import { MainColor } from '../../../../GlobalStyle';

export const wrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const tempIcon = styled.img`
  display: inline-block;
  width: 1.25rem;
  height: 2rem;
`;

export const tempText = styled.p`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${MainColor};
  margin-left: 0.25rem;
`;

export const celsius = styled.p`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${MainColor};
`;
