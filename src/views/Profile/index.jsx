import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { StyledProfile } from "./styled-components";

import ContentWrapper from "../../components/ContentWrapper";
import { DUMMY_USER_ID } from "../../constants";
import { Row } from "react-bootstrap";
import ProfileInfo from "./profileInfo";
import ProfileAvatar from "./profileAvatar";

import { fetchUserById } from "../../store/actions/userActions";

const Profile = ({ userData, fetchUserById }) => {
  useEffect(() => {
    fetchUserById(DUMMY_USER_ID.userId);
  }, [fetchUserById]);

  return (
    <ContentWrapper backgroundColor={"var(--backgroundColor)"}>
      <StyledProfile className="container">
        <Row>
          <ProfileAvatar userData={userData} />
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
    </ContentWrapper>
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
