import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { gallerys } from "../../data/gallerys";

const ProductGallery = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {gallerys.map((gallery) => (
        <SwiperSlide key={gallery.id}>
          <img src={gallery.urlImage} alt={gallery.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductGallery;
