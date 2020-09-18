import { useState, useEffect } from "react";
import { storage, db } from "../config/fireBaseConfig";

//modal hook. Allows to get all the modal functionality in one function
export const useModal = (state, trigger, path, history) => {
  let [showModal, setShowModal] = useState(state);
  let [modalData, setModalData] = useState("");

  useEffect(() => {
    trigger && setShowModal(true);
  }, [trigger]);

  const hideModal = () => {
    setShowModal(false);
  };
  const onConfirmRedirect = () => {
    history.push(path);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleModalData = (data) => {
    setModalData(data);
    setShowModal(!showModal);
  };

  return {
    modalData,
    showModal,
    hideModal,
    onConfirmRedirect,
    openModal,
    toggleModal,
    toggleModalData,
  };
};
//useStorage hook. Allows to save the image avoiding rendering problems
export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        await collectionRef.add({ url });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};
