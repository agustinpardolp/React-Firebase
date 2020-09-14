import React from "react";
import styled from "styled-components";

import { Col, Image as Img } from "react-bootstrap";

const StyledImage = styled(Img)`
  width: ${(props) => (props.width ? props.width : "9.375rem")};
  border: ${(props) => (props.border ? props.border : "solid grey 5px")};
`;

const Image = ({ xs, md, lg, width, border, isRounded, imgLocation }) => {
  return (
    <StyledImage
      src={imgLocation}
      roundedCircle={isRounded}
      width={width}
      border={border}
    />
  );
};

export default Image;
