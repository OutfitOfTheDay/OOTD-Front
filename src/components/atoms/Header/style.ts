import styled from 'styled-components';

import { MainColor, SubColor } from 'src/GlobalStyle';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background: ${MainColor};
  box-shadow: 0 0.625rem 0.625rem 0 rgba(0, 0, 0, 0.15);
  position: relative;
  margin-bottom: 2.563rem;
`;

export const Logo = styled.h1`
  display: table;
  margin: 0 auto;
  line-height: 5rem;
  font-family: 'Play Pretend';
  font-size: 3.125rem;
  color: ${SubColor};
  cursor: pointer;
`;
