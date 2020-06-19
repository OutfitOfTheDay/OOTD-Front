import styled from 'styled-components';

import { MainColor, DeactTextColor, InputBorderColor } from 'src/GlobalStyle';

export const InputContainer = styled.div`
  height: 2rem;
  margin-bottom: 0.5rem;
`;

export const InputLabel = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${DeactTextColor};
  display: inline-block;
  margin-right: 1rem;
`;

export const NameInput = styled.input`
  width: 14.375rem;
  height: 2rem;
  border: solid 1px ${InputBorderColor};
  color: ${DeactTextColor};
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 0 0.375rem;
`;

export const AccountSetting = styled.p`
  font-size: 0.625rem;
  font-weight: bold;
  color: ${InputBorderColor};
  display: inline-block;
  margin-right: 0.75rem;
  cursor: pointer;
`;

export const ProfileEditBtn = styled.button<{ isChanged: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ isChanged }) =>
    isChanged ? MainColor : 'rgba(85, 16, 155, 0.2)'};
  padding-left: 9rem;
`;
