import { Box } from "@mui/material";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./secondSallingItemsStyles";
import sampleItems from "./sampleItems.json";

const config = {
    sliderWithRadius: false,
    sliderHeight: "250px !important",
    slidesPerViewInXl: 2,
    slidesPerViewInLg: 3,
    slidesPerViewInSm: 3,
  },
  swiperConfig = {
    navigation: false,
  };

const SecondSallingItems = () => {
  const renderedItems = (items) =>
    items.map((item) => {
      return (
        <SwiperSlide
          key={item.id}
          style={{ background: "#fff" }}
          className="slides-with-radius mini-slider"
        >
          <ItemDramatic
            bannerUrl={item.iconUrl}
            title={item.title}
            desc={item.desc}
            rate={item.star}
            minPrice={item.minPrice || null}
            maxPrice={item.maxPrice || null}
          />
        </SwiperSlide>
      );
    });
  return (
    <Box sx={containerStyles}>
      <Slider {...config} swiperConfig={swiperConfig}>
        {renderedItems(sampleItems)}
      </Slider>
    </Box>
  );
};

export default SecondSallingItems;
