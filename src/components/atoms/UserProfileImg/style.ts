import styled from 'styled-components';

export const userProfileImg = styled.img<{ size: string }>`
  width: ${props => props.size};
  height: ${props => props.size};
`;
