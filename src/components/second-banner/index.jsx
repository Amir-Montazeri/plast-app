import { Box } from "@mui/material";
import { containerStyles } from "./secondBannerStyles";

const SecondBanner = () => {
  return (
    <Box sx={containerStyles}>
      <img
        width="100%"
        src="./assets/main-backgrounds/second-banner.jpg"
        alt="banner"
      />
    </Box>
  );
};

export default SecondBanner;
