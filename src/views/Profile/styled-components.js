import { Col } from "react-bootstrap";
import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledCol = styled(Col)`
  .personal-info_h3_container {
    margin: 5%;
    border-bottom: solid grey 0.5px;
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
  h1 {
    margin-top: 5%;
  }
  .row {
    height: 100%;
    width: 100%;
    border-radius: 5%;
    margin-top: 10%;
    border: solid grey 1px;
    background: aliceblue;
    padding: 1%;
    box-shadow: 0 0 5px;
  }
  .profile-col {
    display: grid;
    text-align: center;
    justify-content: center;
    align-items: flex-start;
    background: var(--backgroundProfile);
    border-radius: 21px;
    padding-top: 5%;
    h3,
    h5 {
      color: var(--fontColor);
    }
    img {
      box-shadow: 0 0 5px;
    }
    @media ${DEVICES_MAX_WIDTH.tablet} {
    }
  }
  @media ${DEVICES_MAX_WIDTH.tablet} {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    width: 100%;
  }
  @media ${DEVICES_MAX_WIDTH.mobileL} {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
  }
`;

const StyledInfo = styled.div`
  margin-top: 4%;
`;

export { StyledInfo, StyledProfile, StyledCol };
