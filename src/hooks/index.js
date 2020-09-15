import { useState, useEffect } from "react";

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

export const useFiles = (type) => {
  let fileStructure =
    type === "person"
      ? {
          person_national_id_front_doc: "",
          person_national_id_rear_doc: "",
          pvp_doc: "",
        }
      : {
          representative_national_id_front_doc: "",
          representative_national_id_rear_doc: "",
          pvp_doc: "",
          company_structure_doc: "",
        };

  let sizeStructure =
    type === "person"
      ? {
          person_national_id_front_doc: 0,
          person_national_id_rear_doc: 0,
          pvp_doc: 0,
        }
      : {
          representative_national_id_front_doc: 0,
          representative_national_id_rear_doc: 0,
          pvp_doc: 0,
          company_structure_doc: 0,
        };

  const [files, setFiles] = useState(fileStructure);
  const [size, setSize] = useState(sizeStructure);

  const handleFileChange = (e, setFieldValue, setErrors) => {
    if (e.target.files.length) {
      let file = e.target.files ? e.target.files[0].type.split("/")[1] : [];
      var filetypes = new RegExp("/|jpeg|png|pdf|/");
      var isValidtype = filetypes.test(file);

      if (isValidtype) {
        setFiles({
          ...files,
          [e.target.name]: e.target.files[0].name, //guardo valores locales para que se vea el nombre del archivo al cargar
        });
        setSize({ ...size, [e.target.name]: e.target.files[0].size });
        let keyName = e.target.name;
        let filesSelected = e.target.files;
        if (filesSelected.length > 0) {
          let fileToLoad = filesSelected[0];

          //funcion para pasar file capturado a base64. Se retorna una promesa, pq el metodo filereader.onLoad es asincrono!
          function filePromise(file) {
            return new Promise((res, rej) => {
              let fileReader = new FileReader();
              fileReader.onload = (fileLoadedEvent) => {
                res(fileLoadedEvent.target.result);
              };
              fileReader.readAsDataURL(file);
            });
          }
          filePromise(fileToLoad).then((result) => {
            //resuelvo resultado con archivo pasado a b64
            setFieldValue(keyName, result); //seteo valor en formik
          });
        }
      } else {
        setErrors({ [e.target.name]: "Tipo de archivo inválido" });
        setFiles({
          ...files,
          [e.target.name]: " ",
        });
      }
    }
  };
  return {
    files,
    size,
    setFiles,
    handleFileChange,
  };
};
