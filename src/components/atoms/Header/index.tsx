import * as React from 'react';

import * as S from './style';

import { header } from 'assets/index';
import Img from 'atoms/public/ProfileImg';
import SelectBlock from './SelectBlock';
import { useMypage } from '../../../hooks';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClickList = () => {
    setIsClicked(!isClicked);
  };

  const { profileImg } = useMypage();

  return (
    <S.HeaderWrapper>
      <Link to="/">
        <S.Logo>#OOTD</S.Logo>
      </Link>
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
