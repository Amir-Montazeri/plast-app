import { Box } from "@mui/material";
import { useState } from "react";
import { imgContainer } from "./leftSectionStyles";

const LeftSection = () => {
  const [bgUrl, setBgUrl] = useState(
    "./assets/main-backgrounds/download-app-banner.svg"
  );

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgUrl}) !important`,
          ...imgContainer,
        }}
      ></Box>
    </>
  );
};

export default LeftSection;
