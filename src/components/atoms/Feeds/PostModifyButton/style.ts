import styled from 'styled-components';
import { MainColor, DeactTextColor } from 'src/GlobalStyle';

export const PostModifyButtonWrapper = styled.div`
  display: flex;
  flex-direction: ;
`;

export const PostModifyButton = styled.button<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}rem;
  color: rgba(85, 16, 155, 0.6);
  font-weight: 800;
  margin-left: 0.5rem;
  &: hover {
    color: ${MainColor};
  }
`;
