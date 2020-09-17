import React, { useCallback, useState, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Image from "../../components/Image";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Spinner from "../../components/Spinner";
import ContentWrapper from "../../components/ContentWrapper";
import FileInput from "./fileInput";
import { OverlayAnimation } from "../../utils/animations";
import {
  StyledContainer,
  StyledCategoryTittle,
  StyledGallery,
} from "./style-components";
import { useModal } from "../../hooks";
import { SCREEN_LABELS, REQUEST_STATUS } from "../../constants";
import {
  fetchImageList,
  deleteImage,
} from "../../store/actions/galleryActions";

const Gallery = ({ imageList, fetchImageList, deleteImage, status }) => {
  const { showModal, hideModal, modalData, toggleModalData } = useModal(false);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetchImageList(); //get images from firebase
  }, [fetchImageList, file]);

  const handleFileChange = (e) => {
    //fn to validate file type, and set it locally
    if (e.target.files.length) {
      let file = e.target.files ? e.target.files[0].type.split("/")[1] : [];
      let filetypes = new RegExp("/|jpeg|png|/");
      let isValidtype = filetypes.test(file);

      if (isValidtype) {
        setFile(
          e.target.files[0] //guardo valores locales para que se vea el nombre del archivo al cargar
        );
        setErrors(null);
      } else {
        setErrors(SCREEN_LABELS.gallery.fileError); //en su defecto error
        setFile(null);
      }
    }
  };

  const handleDeleteImage = useCallback(
    (imgId) => {
      deleteImage(imgId).then(() => {
        fetchImageList();
      });
      hideModal();
    },
    [deleteImage, fetchImageList, hideModal]
  );

  return (
    <ContentWrapper backgroundColor={"var(--backgroundColor)"}>
      <StyledGallery>
        <StyledContainer>
          <FileInput
            errors={errors}
            file={file}
            handleChange={handleFileChange}
            setFile={setFile}
          ></FileInput>
          {status === REQUEST_STATUS.LOADING && !file ? (
            <Spinner />
          ) : (
            <ul>
              {imageList && imageList.length ? (
                imageList.map((image) => {
                  return (
                    <li key={uuidv4()}>
                      {" "}
                      <div className="galery-image-container">
                        <Image
                          imgLocation={image.url}
                          border={"solid 0.5px grey"}
                          height={"100%"}
                        >
                          <OverlayAnimation>
                            <StyledCategoryTittle fontSize={"20px"}>
                              <Button
                                variant="danger"
                                onClick={() => toggleModalData(image.id)}
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
                  <span>{SCREEN_LABELS.gallery.noProd}</span>
                </li>
              )}
            </ul>
          )}
          <Modal
            show={showModal}
            onHide={hideModal}
            message={SCREEN_LABELS.modal.delete}
            data={modalData}
            onConfirm={() => handleDeleteImage(modalData)}
          />
        </StyledContainer>
      </StyledGallery>
    </ContentWrapper>
  );
};

export const mapStateToProps = (state) => {
  const {
    images: { data: imageList, status },
  } = state;
  return {
    imageList,
    status,
  };
};

export const mapDispatchToProps = {
  fetchImageList,
  deleteImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
