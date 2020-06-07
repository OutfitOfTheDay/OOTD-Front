import styled from 'styled-components';
import { MainColor } from '../../../GlobalStyle';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
  border-top: 1px solid #eee7f5;
  border-bottom: 1px solid #eee7f5;
`;

export const MoreCommentButton = styled.button`
  color: ${MainColor};
  font-size: 0.75rem;
  font-weight: 800;
  margin-top: 1.25rem;
  border: 0;
  outline: 0;
`;
