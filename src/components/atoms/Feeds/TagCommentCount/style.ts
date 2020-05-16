import styled from 'styled-components';
import { DeactColor } from '../../../../GlobalStyle';

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.75rem;
`;

export const CountInfo = styled.p`
  margin-left: 8px;
  padding: 0;
  color: ${DeactColor};
  font-weight: bold;
`;
