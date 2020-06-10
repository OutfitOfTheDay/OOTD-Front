import styled from 'styled-components';
import { MainColor, DeactColor } from '../../../GlobalStyle';

export const DetailPostContainer = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  background-color: #e3e6f0;
  align-items: center;
  justify-content: center;
`;

export const DetailPostWrapper = styled.div`
  display: flex;
  width: 75.13rem;
  height: 43.88rem;
  background-color: #fff;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.16);
  flex-direction: row;
  border: solid 1px ${MainColor};
`;

export const DetailPostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 43.88rem;
  width: 31.44rem;
  padding: 0 0.75rem;
`;

export const ScrollArea = styled.div`
  height: 37.63rem;
  overflow-y: auto;
  white-space: pre-line;
`;

export const DetailWriting = styled.p`
  width: 29.75rem;
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: ${DeactColor};
`;

export const DetailPostInfoWrapper = styled.div`
  display: flex;
  height: 3.125rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
