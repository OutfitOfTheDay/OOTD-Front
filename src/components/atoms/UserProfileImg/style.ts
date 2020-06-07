import styled from 'styled-components';

export const useProfileImg = styled.img<{ size: number }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;
