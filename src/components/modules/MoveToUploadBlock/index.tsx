import * as React from 'react';
import { BlockWrapper, BlockTitle } from 'atoms/StatusBlock';
import { Link } from 'react-router-dom';

const MoveToUploadBlock: React.FC = () => (
  <Link to="/upload">
    <BlockWrapper className="upload">
      <BlockTitle margin={0}>STYLE UPLOAD</BlockTitle>
    </BlockWrapper>
  </Link>
);

export default MoveToUploadBlock;
