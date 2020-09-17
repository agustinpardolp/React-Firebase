import React from "react";
import Image from "../../components/Image";
import styled from "styled-components";
import Button from "../../components/Button";
import Modal from "../../components/modal";
import { OverlayAnimation } from "../../utils/animations";
import { useModal } from "../../hooks";
import { SCREEN_LABELS } from "../../constants";

const StyledGallery = styled.section`
  min-height: 100vh;
  .galery-image-container {
    width: 20rem;
    height: 15rem;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px;
    margin: 5px;
  }
  li {
    list-style: none;

    margin: 0.5rem;
    padding: 0px;
  }
`;
const StyledContainer = styled.div`
  margin: 3%;
`;

const StyledCategoryTittle = styled.div`
  text-decoration: none !important;
  transition: all 0.5s;
  position: absolute;
  color: var(--mainColorFont) !important;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  :hover {
    color: var(--mainColorFont);
    transition: all 0.4s ease 0s;
  }
`;

const Gallery = () => {
  const {
    showModal,
    hideModal,
    openModal,
    fullModal,
    openFullModal,
  } = useModal(false);

  return (
    <StyledGallery>
      <StyledContainer>
        <Button
          type="outline-info"
          label={"Add new product"}
          onClick={openFullModal}
        />
        <ul>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/GPS.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
              >
                <OverlayAnimation>
                  <StyledCategoryTittle fontSize={"20px"}>
                    <Button
                      type="danger"
                      onClick={() => openModal()}
                      label={"Delete"}
                    ></Button>
                  </StyledCategoryTittle>
                </OverlayAnimation>
              </Image>
            </div>
          </li>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/audio.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
              />
            </div>
          </li>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/securityCamera.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
              />
            </div>
          </li>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/notebook2.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
                rounded
              />
            </div>
          </li>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/soundbar.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
              />
            </div>
          </li>

          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/tablet.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
              />
            </div>
          </li>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/termostat.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
                rounded
              />
            </div>
          </li>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/xbox.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
              />
            </div>
          </li>
          <li>
            <div className="galery-image-container">
              <Image
                imgLocation="images/gallery-images/portablebat.jpg"
                border={"solid 0.5px grey"}
                height={"100%"}
              />
            </div>
          </li>
        </ul>
      </StyledContainer>
      <Modal
        show={fullModal}
        isFullModal={fullModal}
        onHide={hideModal}
        message={SCREEN_LABELS.gallery.addNew}
      />
      <Modal
        show={showModal}
        onHide={hideModal}
        message={SCREEN_LABELS.modal.delete}
      />
    </StyledGallery>
  );
};
export default Gallery;
