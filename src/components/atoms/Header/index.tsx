import * as React from 'react';

import * as S from './style';

import { header } from 'assets/index';
import Img from 'atoms/public/ProfileImg';
import SelectBlock from './SelectBlock';
import { useMypage } from '../../../hooks';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClickList = () => {
    setIsClicked(!isClicked);
  };

  const { profileImg } = useMypage();

  return (
    <S.HeaderWrapper>
      <S.Logo>#OOTD</S.Logo>
      <Img
        imgSrc={
          profileImg instanceof File
            ? URL.createObjectURL(profileImg)
            : header.default_profile
        }
        size={40}
        className="header"
        handleClickEvent={handleClickList}
      />
      <SelectBlock isClicked={isClicked} handleClosing={handleClickList} />
    </S.HeaderWrapper>
  );
};

export default Header;
