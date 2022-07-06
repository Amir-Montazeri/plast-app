import slidesPerView from "./slidesPerView.json";

export const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export const calSlidesPerView = (
  innerWidth,
  slidesInXl,
  slidesInLg,
  slidesInSm
) => {
  let result;
  if (innerWidth > 990) {
    result = slidesInXl || slidesPerView.xl;
  } else if (innerWidth > 600) {
    result = slidesInLg || slidesPerView.lg;
  } else {
    result = slidesInSm || slidesPerView.sm;
  }
  return result;
};
