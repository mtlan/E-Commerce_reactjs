import React from "react";

import Parameter from "../components/Parameter";

import { parameters } from "../data/parameter";
import ParameterItem from "../components/Parameter/ParameterItem";
import ProductPrice from "../components/ProductPrice";
import ProductGallery from "../components/ProductGallery";
import AccessoriesRelate from "../components/AccessoriesRelate";

import { useParams } from "react-router-dom";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

const ProductDetail = () => {
  let [products, setProducts] = React.useState<ProductType | null>(null);

  let params = useParams();
  console.log(params);

  React.useEffect(() => {
    let fetchProduct = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${params.id}`
      );
      let result = await response.json();

      console.log(result);
      setProducts(result);
    };
    fetchProduct();
  }, []);

  return (
    <div style={{ marginTop: 50 }} className="product_info_wrapper d-flex">
      <div className="gallery">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products?.images.map((gallery) => (
            <SwiperSlide>
              <img height={400} width={400} src={gallery} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>{/* <img height={400} width={400} src={products?.images[0]} alt="" /> */}
        
      </div>
      <div className="product_info">
        <h1 className="section_title">{products?.title}</h1>
        <div className="product_price">
          <strong>${products?.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
