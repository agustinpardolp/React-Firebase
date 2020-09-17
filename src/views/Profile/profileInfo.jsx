import React from "react";
import { StyledCol } from "./styled-components";
import Button from "../../components/Button";

const ProfileInfo = () => {
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
                <span>Email:</span>agus@hotmail.com
              </li>
              <li>
                <span>Phone:</span>(+54-453-15478){" "}
              </li>
              <li>
                <span>Adress:</span> San Martin y Alvarez N 1587
              </li>
              <li>
                <span>City:</span> La Plata
              </li>
              <li>
                <span>State:</span>Buenos Aires
              </li>
            </ul>
          </div>
          <Button type={"info"} label={"Edit contact"} />
        </section>
      </StyledCol>
    </>
  );
};

export default ProfileInfo;
