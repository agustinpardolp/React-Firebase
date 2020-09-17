import React, { useEffect } from "react";
import { useStorage } from "../../hooks";
import styled from "styled-components";

const StyledUpdloadBar = styled.div`
  height: 5px;
  background: var(--backgroundProfile);
  width: ${(props) => props.width && props.width};
`;

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
      width={progress}
    ></StyledUpdloadBar>
  );
};

export default UploadBar;
