import styled from 'styled-components';
import { DeactColor } from '../../../../GlobalStyle';
export const FeedImageWrapper = styled.div`
  display: flex;
  background-color: #505144;
  width: 43.75rem;
  height: 43.75rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const FeedImage = styled.img`
  object-fit: contain;
  max-width: inherit;
  height: inherit;
`;
