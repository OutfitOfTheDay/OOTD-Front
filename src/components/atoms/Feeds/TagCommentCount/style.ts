import styled from 'styled-components';
import { DeactColor } from '../../../../GlobalStyle';

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const CountInfo = styled.p<{ fontSize: string }>`
  margin-right: 8px;
  padding: 0;
  color: ${DeactColor};
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
`;
