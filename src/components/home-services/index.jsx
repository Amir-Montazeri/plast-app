import { Box, Grid, Typography } from "@mui/material";
import {
  containerStyles,
  iconContainer,
  titleStyles,
} from "./homeServicesStyles";
import HomeRenderedBoxes from "../home-rendered-boxes";
import { VscLaw } from "react-icons/vsc";
import { BsJournalBookmarkFill, BsApple } from "react-icons/bs";

const homeServices = [
  {
    title: "تنظیم و نگارش انواع لایحه",
    desc: "نگارش تخصصی انواع لایحه, شکواییه و دادخواست",
    link: "/",
    bgclr: "#734926",
    clr: "#fff",
    header: (
      <Box sx={iconContainer}>
        <BsApple />
      </Box>
    ),
  },
  {
    title: "ارائه مشاوره حقوق",
    desc: "ارائه مشاوره حقوقی حضوری و غیرحض.ری به شما عزیزان",
    link: "/",
    bgclr: "#734926",
    clr: "#fff",
    header: (
      <Box sx={iconContainer}>
        <BsJournalBookmarkFill />
      </Box>
    ),
  },
  {
    title: "قبول وکالت در کلیه دعاوی",
    desc: "قبول وکالت در کلیه دعاوی, اعم از دعاوی ملکی ثبتی, خانواده, مالی, کیفری, بانکی, مهاجرت",
    link: "/",
    bgclr: "#734926",
    clr: "#fff",
    header: (
      <Box sx={iconContainer}>
        <VscLaw />
      </Box>
    ),
  },
];

const HomeServices = () => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h4" component="h3" color="#502A0F" sx={titleStyles}>
        ما چه خدماتی ارائه می‌دهیم
      </Typography>
      <Grid container justifyContent="space-evenly">
        <HomeRenderedBoxes items={homeServices} />
      </Grid>
    </Box>
  );
};

export default HomeServices;
