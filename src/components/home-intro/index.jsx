import { Box } from "@mui/system";
import { containerStyles } from "./homeIntroStyles";
import IntroContainer from "./IntroContainer";
import Slider from "./Slider";
import sliderItems from "./sliderItems.json";

const HomeIntro = () => {
  return (
    <Box sx={containerStyles}>
      <IntroContainer />
      <Slider items={sliderItems} />
    </Box>
  );
};

export default HomeIntro;
