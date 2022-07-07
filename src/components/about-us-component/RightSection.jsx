import { Box } from "@mui/material";
import { useState } from "react";
import { imgContainer } from "./rightSectionStyles";

const RightSection = () => {
  const [bgUrl, setBgUrl] = useState(
    "./assets/main-backgrounds/aboutus-banner.jpg"
  );

  return (
    <>
      <Box
        sx={{
          background: `url(${bgUrl}) !important`,
          ...imgContainer,
        }}
      />
    </>
  );
};

export default RightSection;
