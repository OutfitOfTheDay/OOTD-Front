import styled from 'styled-components';
import { MainColor, DeactTextColor } from '../../../../GlobalStyle';

export const PostContentWrapper = styled.div`
  display: flex;
  width: inherit;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostContent = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width: 34rem;
  line-height: 1.063rem;
  white-space: pre-line;
  font-size: 0.875rem;
  color: ${DeactTextColor};
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const ShowDetailPostBtn = styled.button`
  display: inline-block;
  font-size: 0.875rem;
  color: ${MainColor};
  font-weight: bold;
  align-self: flex-end;
`;
