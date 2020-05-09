import React from 'react';
import * as S from './style';

interface Props {
  buttonImage: any;
}
const AuthButton: React.FC<Props> = ({ buttonImage }) => {
  return <S.AuthButtonWrapper src={buttonImage} />;
};

export default AuthButton;
