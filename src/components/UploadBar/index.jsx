import React, { useEffect } from "react";
import { useStorage } from "../../hooks";
import { StyledUpdloadBar } from "./styled-components";

const UploadBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <StyledUpdloadBar
      className="progress-bar info"
      width={progress / 20}
    ></StyledUpdloadBar>
  );
};

export default UploadBar;
