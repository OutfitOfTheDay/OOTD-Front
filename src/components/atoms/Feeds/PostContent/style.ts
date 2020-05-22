import styled from 'styled-components';
import { MainColor, DeactColor } from '../../../../GlobalStyle';

export const PostContentWrapper = styled.div`
  display: flex;
  width: inherit;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PostContent = styled.p`
  width: 34rem;
  height: 5.125rem;
  overflow: hidden;
  line-height: 1.063rem;
  white-space: pre-line;
  font-size: 0.875rem;
  color: ${DeactColor};
`;

export const ShowDetailPostBtn = styled.button`
  font-size: 0.875rem;
  color: ${MainColor};
  font-weight: bold;
`;
