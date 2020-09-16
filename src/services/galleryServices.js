import axios from "axios";

// Initialize Firebase

// let users = dataBase
//   .collection("users")
//   .get()
//   .then((data) => {
//     return data;
//   });

const fetchImageList = async (companyId) => {
  return await axios
    .get
    // `${CLIENTS_PATH_ENDPOINT}${companyId}/contacts/?is_active=true`
    ();
};

const deleteImage = async (companyId) => {
  let { access_token, token_type } = JSON.parse(
    sessionStorage.getItem("token_data")
  );
  let authorization = `${token_type} ${access_token}`;
  let requestOptions = {
    method: "GET",
    mode: "no-cors",
    headers: {
      authorization,
    },
  };
  return await axios.delete(
    // `${CLIENTS_PATH_ENDPOINT}${companyId}/contacts/?is_active=true`,
    requestOptions
  );
};
const saveNewImage = async (imgData) => {
  let { access_token, token_type } = JSON.parse(
    sessionStorage.getItem("token_data")
  );
  let authorization = `${token_type} ${access_token}`;
  let requestOptions = {
    method: "GET",
    mode: "no-cors",
    headers: {
      authorization,
    },
  };
  return await axios.delete(
    // `${CLIENTS_PATH_ENDPOINT}${companyId}/contacts/?is_active=true`,
    requestOptions
  );
};
export const galleryServices = {
  fetchImageList,
  deleteImage,
  saveNewImage,
};
