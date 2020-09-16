import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { StyledInfo, StyledProfile } from "./styled-components";
import { DUMMY_USER_ID } from "../../constants";
import { Row, Col } from "react-bootstrap";
import Image from "../../components/Image";
import ProfileInfo from "./profileInfo";
import { fetchUserById } from "../../store/actions/userActions";

const Profile = ({ users, fetchUserById }) => {
  useEffect(() => {
    fetchUserById(DUMMY_USER_ID.userId);
  }, [fetchUserById]);

  return (
    <StyledProfile className="container">
      <Row>
        <Col sm={12} md={6} lg={6} xs={12} className="profile-col">
          <Image
            imgLocation="images/user-images/img_avatar.png"
            isRounded={true}
            width="9.75rem"
            height="9rem"
            bgCover={true}
          />
          <StyledInfo>
            {/* <h3>{users[1].name}</h3>
            <h5>{users[1].role}</h5> */}
          </StyledInfo>
        </Col>
        <ProfileInfo />
      </Row>
    </StyledProfile>
  );
};

export const mapStateToProps = (state) => {
  const { firestore } = state;
  return {
    // users,
  };
};

export const mapDispatchToProps = {
  fetchUserById,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "users" }])
)(Profile);
