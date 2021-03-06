import * as React from 'react';

import * as S from './style';

interface IProps {
  className?: string;
  imgSrc: string;
  size: number;
  isShadow?: true;
  handleClickEvent: any;
}

const ProfileImg: React.FC<IProps> = ({
  className,
  imgSrc,
  isShadow,
  size,
  handleClickEvent,
}) => (
  <S.img
    src={imgSrc}
    // alt="Profile Image"
    alt="Profile Image"
    className={className}
    size={size}
    isShadow={isShadow}
    onClick={handleClickEvent}
  />
);

export default ProfileImg;
