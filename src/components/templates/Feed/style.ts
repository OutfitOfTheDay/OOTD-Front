import styled from 'styled-components';
import { MainColor } from 'src/GlobalStyle';

export const FeedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FeedStatusBlockWrapper = styled.div`
  position: fixed;
  right: 15.56rem;
  top: 7.5rem;
`;

export const goLogInText = styled.p`
  color: ${MainColor};
  font-size: 1rem;
`;

export const goLogInButton = styled.button`
  color: ${MainColor};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const UserProfileBlock = styled.div`
  display: flex;
  width: 20rem;
  height: 3.75rem;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const UserName = styled.p`
  font-size: 1.25rem;
  color: ${MainColor};
  font-weight: 800;
  margin-left: 1rem;
`;
