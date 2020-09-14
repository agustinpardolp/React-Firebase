import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Image from "../../components/image";
import ProfileInfo from "./profileInfo";

const StyledProfile = styled.div`
  display: flex;
  width: 45%;
  height: 55%;
  background: var(--backgroundLightColor);
  border-radius: var(--borderRadius);
  margin-top: 3%;
  margin-bottom: 3%;
  box-shadow: 0 0 5px;
  h1 {
    margin-top: 5%;
  }
  .row {
    height: 100%;
    border-radius: 5%;
  }
  .col {
    display: grid;
    grid-template-rows: 40% 40%;
    grid-row-gap: 3rem;
    justify-content: center;
    align-items: flex-start;
    background: var(--backgroundProfile);
    border-radius: 21px;
    box-shadow: 0 0 5px;
    padding-top: 5%;
    h3,
    h5 {
      color: var(--fontColor);
    }
    img {
      box-shadow: 0 0 5px;
    }
  }
`;

const StyledInfo = styled.div`
  margin-top: 4%;
`;

function Profile() {
  return (
    <StyledProfile className="container" xs={12} md={6} lg={6}>
      <Row>
        <Col xs={12} md={6} lg={6} className="col">
          <Image
            imgLocation="images/user-images/img_avatar.png"
            isRounded={true}
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
}

export default Profile;
