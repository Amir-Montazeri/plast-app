import { Box, Grid, Typography } from "@mui/material";
import {
  containerStyles,
  contentStyles,
  titleStyles,
} from "./homeServicesStyles";
import HomeRenderedBoxes from "../home-rendered-boxes";
import RenderedHeader from "./RenderedHeader";
import sampleRenderedHeader from "./sampleRenderedHeader.json";

const homeServices = [
  {
    title: "دکتر حسین محسنی",
    desc: "وکالت در خصوص اراضی منطقه سعدآباد با استناد به ماده دوازده",
    link: "/",
    titleClr: "#EFC94C",
    descClr: "#fff",
    clr: "#000",
    bgclr: "#EFC94C",
    header: <RenderedHeader {...sampleRenderedHeader[0]} />,
  },
  {
    title: "دکتر حسین محسنی",
    desc: "وکالت در خصوص اراضی منطقه سعدآباد با استناد به ماده دوازده",
    link: "/",
    titleClr: "#EFC94C",
    descClr: "#fff",
    clr: "#000",
    bgclr: "#EFC94C",
    header: <RenderedHeader {...sampleRenderedHeader[1]} />,
  },
  {
    title: "دکتر حسین محسنی",
    desc: "وکالت در خصوص اراضی منطقه سعدآباد با استناد به ماده دوازده",
    link: "/",
    titleClr: "#EFC94C",
    descClr: "#fff",
    clr: "#000",
    bgclr: "#EFC94C",
    header: <RenderedHeader {...sampleRenderedHeader[2]} />,
  },
];

const HomeServices = () => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h4" component="h3" color="#502A0F" sx={titleStyles}>
        افرادی که با ما همکاری داشته‌اند
      </Typography>
      <Grid container sx={contentStyles} justifyContent="space-evenly">
        <HomeRenderedBoxes
          items={homeServices}
          primaryContainerClass={{ height: "290px" }}
        />
      </Grid>
    </Box>
  );
};

export default HomeServices;
