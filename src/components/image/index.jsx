import React from "react";
import { StyledImage } from "./styled-components";

const Image = ({
  width,
  height,
  border,
  bgCover,
  isRounded,
  imgLocation,
  children,
}) => {
  return (
    <StyledImage
      imgLocation={imgLocation}
      rounded={isRounded}
      width={width}
      height={height}
      border={border}
      bgCover={bgCover}
    >
      {children}
    </StyledImage>
  );
};

export default React.memo(Image);
