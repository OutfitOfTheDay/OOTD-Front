import styled from 'styled-components';

export const useProfileImg = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;
