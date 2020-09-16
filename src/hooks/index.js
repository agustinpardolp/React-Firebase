import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../config/fireBaseConfig";

export const useModal = (state, trigger, path, history) => {
  let [showModal, setShowModal] = useState(state);
  let [fullModal, setFullModal] = useState(false);

  useEffect(() => {
    trigger && setShowModal(true);
  }, [trigger]);

  const hideModal = () => {
    setShowModal(false);
    setFullModal(false);
  };
  const onConfirmRedirect = () => {
    history.push(path);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const openFullModal = () => {
    setFullModal(true);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return {
    showModal,
    fullModal,
    hideModal,
    onConfirmRedirect,
    openModal,
    toggleModal,
    openFullModal,
  };
};

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");
    debugger;
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
