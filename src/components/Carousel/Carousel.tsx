import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";

const imgArr = [
  {
    id: 1,
    src: "/carousel/1.jpg",
    src2x: "/carousel/1@2x.jpg",
    altText: "Photo our team 1",
  },
  {
    id: 2,
    src: "/carousel/2.jpg",
    src2x: "/carousel/2@2x.jpg",
    altText: "Photo our team 2",
  },
  {
    id: 3,
    src: "/carousel/3.jpg",
    src2x: "/carousel/3@2x.jpg",
    altText: "Photo our team 3",
  },
  {
    id: 4,
    src: "/carousel/4.jpg",
    src2x: "/carousel/4@2x.jpg",
    altText: "Photo our team 4",
  },
  {
    id: 5,
    src: "/carousel/5.jpg",
    src2x: "/carousel/5@2x.jpg",
    altText: "Photo our team 5",
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // autoplay: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    // dotsClass: "sliderDots",
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {imgArr.map((img) => (
          <picture key={img.id} className={styles.wrapperImages}>
            <source
              srcSet={`${img.src2x} 2x`}
              media='(min-resolution: 2dppx)'
              type='image/jpg'
            />
            <img className={styles.images} src={img.src} alt={img.altText} />
          </picture>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
