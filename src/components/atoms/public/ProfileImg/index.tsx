import * as React from 'react';

import * as S from './style';

interface IProps {
  className?: string;
  imgSrc: string;
  size: number;
  isShadow?: true;
}

const ProfileImg: React.FC<IProps> = ({
  className,
  imgSrc,
  isShadow,
  size,
}) => (
  <S.img
    src={imgSrc}
    // alt="Profile Image"
    className={className}
    size={size}
    isShadow={isShadow}
  />
);

export default ProfileImg;
