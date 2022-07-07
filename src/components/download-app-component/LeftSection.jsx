import { Box } from "@mui/material";
import { useState } from "react";
import { imgContainer } from "./leftSectionStyles";

const LeftSection = () => {
  const [bgUrl, setBgUrl] = useState(
    "./assets/main-backgrounds/aboutus-banner.jpg"
  );

  return (
    <>
      <Box
        sx={{
          // background: `url(${bgUrl}) !important`,
          ...imgContainer,
        }}
      >
        right
      </Box>
    </>
  );
};

export default LeftSection;
