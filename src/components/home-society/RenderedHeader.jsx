import { Box } from "@mui/material";
import {
  containerStyles,
  titleBoxStyles,
  imgBgBoxStyles,
} from "./renderedHeaderStyles";

const RenderedHeader = ({ title, imgLinks }) => {
  return (
    <Box sx={containerStyles}>
      <Box sx={titleBoxStyles}>{title}</Box>
      <Box sx={{ ...imgBgBoxStyles, background: `url(${imgLinks})` }} />
    </Box>
  );
};

export default RenderedHeader;
