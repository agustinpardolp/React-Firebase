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

const Profile = ({ userData, fetchUserById }) => {
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
            <h3>
              {userData.name} {userData.surname}
            </h3>
            <h5>{userData.role}</h5>
          </StyledInfo>
        </Col>
        <ProfileInfo
          adress={userData.adress}
          city={userData.city}
          company={userData.company}
          email={userData.email}
          name={userData.name}
          phone={userData.phone}
          role={userData.role}
          skills={userData.skills}
          state={userData.state}
          surname={userData.surname}
        />
      </Row>
    </StyledProfile>
  );
};

export const mapStateToProps = (state) => {
  const {
    profile: { data: userData },
  } = state;

  return {
    userData,
  };
};

export const mapDispatchToProps = {
  fetchUserById,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "users" }])
)(Profile);
