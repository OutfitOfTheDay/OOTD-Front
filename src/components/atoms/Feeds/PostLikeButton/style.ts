import styled from 'styled-components';

export const PostButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PostButton = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 1.25rem;
`;
