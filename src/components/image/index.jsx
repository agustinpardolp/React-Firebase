import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border: ${(props) => (props.border ? props.border : "solid grey 5px")};
  object-fit: revert;
  border-radius: ${(props) => props.rounded && "50%"};
  background: ${(props) =>
    props.imgLocation && `url(${props.imgLocation}) no-repeat center;`};
  background-size: ${(props) => (props.bgCover ? "cover" : "contain")};
  position: relative;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  backface-visibility: hidden;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
    backface-visibility: hidden;
  }
`;

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

export default Image;
