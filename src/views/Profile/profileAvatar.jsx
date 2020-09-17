import React from "react";
import { Col } from "react-bootstrap";
import { StyledInfo } from "./styled-components";
import Image from "../../components/Image";

const ProfileAvatar = ({ userData }) => {
  return (
    <Col sm={12} md={6} lg={6} xs={12} className="profile-col">
      <Image
        imgLocation="images/user-images/img_avatar.png"
        isRounded={true}
        width="9.75rem"
        height="9rem"
        bgCover={true}
      />
      <StyledInfo>
        <h3>
          {userData.name} {userData.surname}
        </h3>
        <h5>{userData.role}</h5>
      </StyledInfo>
    </Col>
  );
};

export default ProfileAvatar;
