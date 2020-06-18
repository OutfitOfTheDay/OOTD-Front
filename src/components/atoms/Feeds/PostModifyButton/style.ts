import styled from 'styled-components';
import { MainColor, DeactTextColor } from 'src/GlobalStyle';

export const PostModifyButtonWrapper = styled.div`
  display: flex;
  flex-direction: ;
`;

export const PostModifyButton = styled.button<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}rem;
  color: ${MainColor};
  margin-left: 0.5rem;
`;
