import styled from 'styled-components';

export const CommentItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 29.56rem;
  margin: 0.5rem 0;
`;

export const CommentInfoWrapper = styled.div`
  width: 26.94rem;
  height: auto;
  margin-left: 0.75rem;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  width: 26.94rem;
  justify-content: space-between;
`;

export const UserName = styled.p`
  font-size: 0.75rem;
  color: #707070;
  font-weight: 900;
`;

export const CommentDate = styled.p`
  font-size: 0.625rem;
  color: #707070;
  font-weight: 900;
`;

export const Comment = styled.p`
  width: 26.94rem;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #707070;
  line-height: 1.25;
`;
