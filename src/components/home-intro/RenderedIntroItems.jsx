import { Grid, Box, Typography } from "@mui/material";
import {
  containerStyles,
  introContentStyles,
  titleStyles,
} from "./renderedIntroItemsStyles";

const RenderedIntroItems = ({ title, titleVariant, content, logo }) => {
  return (
    <Grid item sx={containerStyles}>
      <Box sx={introContentStyles}>
        <Typography
          variant={titleVariant || "h3"}
          component="h1"
          color="#502A0F"
          sx={titleStyles}
        >
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </Box>
      {logo}
    </Grid>
  );
};

export default RenderedIntroItems;
