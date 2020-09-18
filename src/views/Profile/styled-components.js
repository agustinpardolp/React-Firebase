import { Col } from "react-bootstrap";
import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledCol = styled(Col)`
  .personal-info_h3_container {
    margin: 5%;
    border-bottom: solid grey 0.5px;
    h3 {
      color: var(--buttonUpload);
    }
  }
  .personal-info_ul_container {
    text-align: justify;
    font-size: 1rem;

    ul {
      padding-left: 0px;
    }
    li {
      margin: 1%;
      list-style: none;
      text-align: initial;
    }
    span {
      font-weight: bold;
    }
    @media ${DEVICES_MAX_WIDTH.mobileL} {
      display: flex;
      justify-content: center;
    }
  }

  section {
    margin: 7%;
    height: 70%;
  }
`;

const StyledProfile = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
  h1 {
    margin-top: 5%;
  }
  .row {
    background: var(--fontColor);
    margin: 3%;
    width: 80%;
    box-shadow: 0 0 5px;
    @media ${DEVICES_MAX_WIDTH.tablet} {
      width: 100%;
    }
  }
  .profile-col {
    display: grid;
    text-align: center;
    justify-content: center;
    border-right: 0.5px solid lightgray;
    grid-template-rows: 1.1fr 1.2fr;
    h3 {
      color: var(--buttonUpload);
    }
    h5 {
      color: var(--mainColor);
    }
    img {
      box-shadow: 0 0 5px;
    }
    @media ${DEVICES_MAX_WIDTH.tablet} {
      grid-template-rows: 2fr 1.2fr;
    }
  }
  @media ${DEVICES_MAX_WIDTH.tablet} {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    width: 100%;
  }
  @media ${DEVICES_MAX_WIDTH.mobileL} {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
`;

const StyledInfo = styled.div`
  margin-top: 4%;
`;

export { StyledInfo, StyledProfile, StyledCol };
