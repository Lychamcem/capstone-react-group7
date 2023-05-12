import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Banner.module.scss";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import { getBannersAPI } from "../../Redux/Services/bannerAPI";

function Banner() {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getBanners = async () => {
    try {
      const data = await getBannersAPI();
      setBanners(data.content);
    } catch (error) {
      setError(error.response?.data?.content);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  if (error) return null;

  const settings = {
    className: "section-outstanding__slider",
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.banner}>
      <Slider {...settings}>
        {banners?.map((item) => {
          return (
            <div key={item.maBanner} className={styles.banner__inner}>
              <img
                src={item.hinhAnh}
                alt={item.maBanner}
                className="img-fluid"
              />

              <div className={styles.banner__trailer}>
                <a href="#" data-lity>
                  <i className="fa fa-play" />
                </a>

                {/* <Modal isOpen={true} onRequestClose={() => setIsOpen(false)}>
                                        {banners?.map((item) => {
                                            <div key={item.maPhim} className=''>
                                                <ReactPlayer
                                                    url="https://www.youtube.com/watch?v=99J9RdkBppM"
                                                    width="100px"
                                                    height="100px"
                                                    playing={true}
                                                    controls={false}
                                                />
                                            </div>
                                        })}

                                    </Modal> */}
              </div>

              <ModalTrailer
                trailer={item.trailer}
                // maPhim={item.maPhim}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default Banner;
