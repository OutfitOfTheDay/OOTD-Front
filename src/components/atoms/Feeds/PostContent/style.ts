import styled from 'styled-components';
import { MainColor, DeactColor } from '../../../../GlobalStyle';

export const PostContentWrapper = styled.div`
  display: flex;
  height: 5.125rem;
  width: inherit;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostContent = styled.p`
  overflow: hidden;
  width: 34rem;
  line-height: 1.063rem;
  white-space: pre-line;
  font-size: 0.875rem;
  color: ${DeactColor};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const ShowDetailPostBtn = styled.button`
  font-size: 0.875rem;
  color: ${MainColor};
  font-weight: bold;
  align-self: flex-end;
`;
