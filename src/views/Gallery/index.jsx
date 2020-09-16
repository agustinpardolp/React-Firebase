import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Image from "../../components/Image";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ModalForm from "../../components/ModalForm";
import { OverlayAnimation } from "../../utils/animations";
import {
  StyledContainer,
  StyledCategoryTittle,
  StyledGallery,
} from "./style-components";
import { useModal } from "../../hooks";
import { SCREEN_LABELS } from "../../constants";
import { fetchImageList } from "../../store/actions/galleryActions";

const Gallery = ({ fetchImageList, imagesList, imagesStatus }) => {
  const {
    showModal,
    fullModal,
    hideModal,
    openModal,
    openFullModal,
  } = useModal(false);

  // useEffect(() => {
  //   fetchImageList();
  // }, [fetchImageList]);

  return (
    <StyledGallery>
      <StyledContainer>
        <Button
          variant="outline-info"
          label={"Add new product"}
          onClick={openFullModal}
          icon={true}
        />
        <ul>
          {imagesList && imagesList.length ? (
            imagesList.map((image) => {
              return (
                <li>
                  <div className="galery-image-container">
                    <Image
                      imgLocation={`images/gallery-images/${image.filename}`}
                      border={"solid 0.5px grey"}
                      height={"100%"}
                    >
                      <OverlayAnimation>
                        <StyledCategoryTittle fontSize={"20px"}>
                          <Button
                            variant="danger"
                            onClick={() => openModal()}
                            label={"Delete"}
                          ></Button>
                        </StyledCategoryTittle>
                      </OverlayAnimation>
                    </Image>
                  </div>
                </li>
              );
            })
          ) : (
            <li>
              <span>No hay productos disponibles</span>
            </li>
          )}
        </ul>
      </StyledContainer>
      <ModalForm
        show={fullModal}
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

export const mapStateToProps = (state) => {
  const {
    firestore: {
      ordered: { images: imagesList },
    },
  } = state;

  return {
    imagesList,
  };
};

export const mapDispatchToProps = {
  fetchImageList,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "images" }])
)(Gallery);
