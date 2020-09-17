import React from "react";
import { StyledInfo, StyledProfile } from "./styled-components";
import { Row, Col } from "react-bootstrap";
import Image from "../../components/Image";
import ProfileInfo from "./profileInfo";

const Profile = () => {
  return (
    <StyledProfile className="container">
      <Row>
        <Col sm={12} md={6} lg={6} xs={12} className="profile-col">
          <Image
            imgLocation="images/user-images/img_avatar.png"
            isRounded={true}
            width={"9.75rem"}
            height={"9rem"}
            bgCover={true}
          />
          <StyledInfo>
            <h3>Juan Garcia</h3>
            <h5>Sales Manager</h5>
          </StyledInfo>
        </Col>
        <ProfileInfo />
      </Row>
    </StyledProfile>
  );
};

export default Profile;
