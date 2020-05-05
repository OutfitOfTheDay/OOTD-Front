import styled from 'styled-components';

import { MainColor } from '../../../../GlobalStyle';

export const wrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const tempIcon = styled.img`
  display: inline-block;
  width: 20px;
  height: 32px;
`;

export const tempText = styled.p`
  display: inline-block;
  font-size: 24px;
  font-weight: 800;
  color: ${MainColor};
  margin-left: 4px;
`;

export const celsius = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: ${MainColor};
`;
