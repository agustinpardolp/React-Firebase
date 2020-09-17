import React, { useCallback, useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Image from "../../components/Image";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import FileInput from "./fileInput";
import { OverlayAnimation } from "../../utils/animations";
import {
  StyledContainer,
  StyledCategoryTittle,
  StyledGallery,
} from "./style-components";
import { projectStorage, projectFirestore } from "../../config/fireBaseConfig";
import { useModal } from "../../hooks";
import { SCREEN_LABELS } from "../../constants";
import { fetchImageList } from "../../store/actions/galleryActions";

const Gallery = ({ imageList, fetchImageList }) => {
  const { showModal, hideModal, modalData, toggleModalData } = useModal(false);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetchImageList();
  }, [fetchImageList]);

  const handleFileChange = (e) => {
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
      const collectionRef = projectFirestore.collection("images");
      collectionRef.doc(imgId).delete();
      hideModal();
    },
    [hideModal]
  );

  return (
    <StyledGallery>
      <StyledContainer>
        <FileInput
          errors={errors}
          file={file}
          handleChange={handleFileChange}
          setFile={setFile}
        ></FileInput>
        <ul>
          {imageList && imageList.length ? (
            imageList.map((image) => {
              return (
                <>
                  <li>
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
                </>
              );
            })
          ) : (
            <li>
              <span>{SCREEN_LABELS.gallery.noProd}</span>
            </li>
          )}
        </ul>
        <Modal
          show={showModal}
          onHide={hideModal}
          message={SCREEN_LABELS.modal.delete}
          data={modalData}
          onConfirm={() => handleDeleteImage(modalData)}
        />
      </StyledContainer>
    </StyledGallery>
  );
};

export const mapStateToProps = (state) => {
  const {
    // images: { data: imageList },
    firestore: {
      ordered: { images: imageList },
    },
  } = state;
  return {
    imageList,
  };
};

export const mapDispatchToProps = {
  fetchImageList,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "images" }])
)(Gallery);
// export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
