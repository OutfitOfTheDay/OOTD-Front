import * as React from 'react';

import * as S from './style';

// import { upload } from 'assets/index';
import readFile from '../../../../utils/readFile';

interface IProps {
  imgList: File[];
  onAddImg: (newImg: any) => any;
  onDeleteImg: (index: number) => any;
}

const ImageContainer: React.FC<IProps> = ({
  imgList,
  onAddImg,
  onDeleteImg,
}) => {
  const [hoveredItem, setHoveredItem] = React.useState<null | number>(null);

  const handleAddImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    readFile(e, onAddImg);
  };

  const handleDeleteImg = (selectedIndex: number) => {
    onDeleteImg(selectedIndex);
  };

  return (
    <S.Wrapper>
      {imgList.map((img, index) => (
        <S.ImageContainer isHover={hoveredItem === index} key={`img${index}`}>
          <S.Image src={URL.createObjectURL(img)} alt={`img${index + 1}`} />
          <img
            className="delbtn"
            // src={upload.delete_img}
            alt="delete button"
            onClick={() => handleDeleteImg(index)}
          />
        </S.ImageContainer>
      ))}
      {imgList.length < 5 && (
        <label htmlFor="input-img">
          <S.AddImageBtn>
            {/* <img src={upload.add_img} alt="Image Add button" /> */}
          </S.AddImageBtn>
        </label>
      )}
      <input
        type="file"
        id="input-img"
        accept=".jpg,.jpeg,.png"
        onChange={handleAddImg}
      />
    </S.Wrapper>
  );
};

export default ImageContainer;
