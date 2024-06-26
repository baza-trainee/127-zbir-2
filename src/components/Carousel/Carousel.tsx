import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";
import { dataImg } from "../../assets/dataImg/dataImg";

const Carousel: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    // autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {dataImg.map((img) => (
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
