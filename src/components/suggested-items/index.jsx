import "./slider.css";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "components/items-slider/Slider";
import { SwiperSlide } from "swiper/react";
import {
  containerStyles,
  titleStyles,
  offersContainer,
  slidesContainerStyles,
} from "./suggestedItemsStyles";
import sampleItems from "./sampleItems.json";
import ItemDramatic from "components/item-dramatic";

const config = {
    sliderWithRadius: false,
    swiperClassNames: "make-space",
  },
  swiperConfig = {
    navigation: false,
  };

const SuggestedItems = () => {
  const renderedSlides = (items) =>
    items.map((item) => (
      <SwiperSlide
        key={item.id}
        className="edited-slider slides-with-radius"
        style={{ borderRadius: "9px" }}
      >
        <ItemDramatic
          title={item.title}
          desc={item.desc}
          bannerUrl={item.iconUrl}
          rate={item.star}
          minPrice={item.minPrice}
          maxPrice={item.maxPrice}
        />
      </SwiperSlide>
    ));

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        پیشنهاد ویژه
      </Typography>
      <Grid container sx={offersContainer}>
        <Grid item component="div" sx={slidesContainerStyles}>
          <Slider
            {...config}
            swiperConfig={swiperConfig}
            slidesPerViewInSm={2}
            slidesPerViewInLg={4}
            slidesPerViewInXl={5.5}
          >
            <SwiperSlide className="banner-container">
              <img
                src="./assets/main-backgrounds/offer-banner.jpg"
                alt="offer-banner"
                height="100%"
              />
            </SwiperSlide>
            {renderedSlides(sampleItems)}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuggestedItems;
