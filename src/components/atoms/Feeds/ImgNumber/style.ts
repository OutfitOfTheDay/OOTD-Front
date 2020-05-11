import styled from 'styled-components';
import { MainColor } from '../../../../GlobalStyle';

export const PageNumber = styled.div<{ isSelected: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? MainColor : '#707070')};
`;
