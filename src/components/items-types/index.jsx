import { Box, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { containerStyles, titleStyles } from "./itemsTypesStyles";
import sampleItems from "./sampleItems.json";
import Slider from "../items-slider/Slider";

const ItemsTypes = () => {
  const renderedSlides = (items) =>
    items.map((item) => (
      <SwiperSlide key={item.id}>
        <img
          src={item.iconUrl}
          alt={`${item.title} slide`}
          width="70%"
          style={{ background: `url(${item.iconUrl})`, zIndex: 5 }}
        />
        <Typography component="p">{item.title}</Typography>
      </SwiperSlide>
    ));

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        گروه محصول خود را انتخاب کنید
      </Typography>
      <Slider>{renderedSlides(sampleItems)}</Slider>
    </Box>
  );
};

export default ItemsTypes;
