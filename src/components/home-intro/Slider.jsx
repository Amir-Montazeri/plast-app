import "swiper/css";
import "swiper/css/navigation";
import "./swiperEdited.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const config = {
  spaceBetween: 60,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
};

const Slider = ({ items }) => {
  const renderedSlide = items.map((link) => (
    <SwiperSlide key={link}>
      <div className="img-slider" style={{ background: `url(${link})` }} />
    </SwiperSlide>
  ));

  return <Swiper {...config}>{renderedSlide}</Swiper>;
};

export default Slider;
