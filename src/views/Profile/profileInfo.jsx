import React from "react";
import { StyledCol } from "./styled-components";
import Button from "../../components/Button";
import { SCREEN_LABELS } from "../../constants";

const ProfileInfo = ({
  adress,
  city,
  company,
  email,
  phone,
  role,
  skills,
  state,
  surname,
}) => {
  return (
    <>
      <StyledCol xs={12} sm={12} md={6} lg={6}>
        <div className="personal-info_h3_container">
          <h3>{SCREEN_LABELS.profile.personalInfo}</h3>
        </div>
        <section>
          <div className="personal-info_ul_container">
            <ul>
              <li>
                <span>{SCREEN_LABELS.profile.company}: </span>
                {company}
              </li>
              <li>
                <span>{SCREEN_LABELS.profile.role}: </span>
                {role}
              </li>
              <li>
                <span>{SCREEN_LABELS.profile.email}: </span>
                {email}
              </li>
              <li>
                <span>{SCREEN_LABELS.profile.phone}: </span>
                {phone}{" "}
              </li>
              <li>
                <span>{SCREEN_LABELS.profile.adress}:</span> {adress}
              </li>
              <li>
                <span>{SCREEN_LABELS.profile.city}: </span> {city}
              </li>
              <li>
                <span>{SCREEN_LABELS.profile.state}: </span>
                {state}
              </li>
              <li>
                <span>{SCREEN_LABELS.profile.skills}: </span>
                {skills}
              </li>
            </ul>
          </div>
          <Button variant="info" label="Edit contact" />
        </section>
      </StyledCol>
    </>
  );
};

export default React.memo(ProfileInfo);
