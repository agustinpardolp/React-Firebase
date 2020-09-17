import React from "react";
import { StyledCol } from "./styled-components";
import Button from "../../components/Button";

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
          <h3>Personal Info</h3>
        </div>
        <section>
          <div className="personal-info_ul_container">
            <ul>
              <li>
                <span>Company: </span>
                {company}
              </li>
              <li>
                <span>Role: </span>
                {role}
              </li>
              <li>
                <span>Email: </span>
                {email}
              </li>
              <li>
                <span>Phone: </span>
                {phone}{" "}
              </li>
              <li>
                <span>Adress:</span> {adress}
              </li>
              <li>
                <span>City: </span> {city}
              </li>
              <li>
                <span>State: </span>
                {state}
              </li>
              <li>
                <span>My skills: </span>
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

export default ProfileInfo;
