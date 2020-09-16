import { createActionTypes } from "../../../utils";

export default {
  ...createActionTypes("GALLERY", "FETCH_IMAGES_LIST"),
  ...createActionTypes("GALLERY", "DELETE_IMAGE"),
  ...createActionTypes("GALLERY", "SAVE_NEW_IMAGE"),
};
