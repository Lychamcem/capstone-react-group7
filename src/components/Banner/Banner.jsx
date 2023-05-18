import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./banner.module.scss";
import { getBannersAPI } from "../../Redux/Services/bannerAPI";
import ReactPlayer from "react-player";
import SampleNextArrow from "../SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "../SamplePrevArrow/SamplePrevArrow";
import { toast } from "react-toastify";

function Banner() {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const getBanners = async () => {
    try {
      const data = await getBannersAPI();
      setBanners(data.content);
    } catch (error) {
      toast.setError("Không lấy được thông tin banner");
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  if (error) return null;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

              <div className={styles.banner__trailer} onClick={() => setShowTrailer(true)}>
                <a href="#" data-lity>
                  <i className="fa fa-play" />
                </a>
              </div>
              {showTrailer && (
                <div
                  className={styles.trailerPopup}
                  onClick={() => setShowTrailer(false)}
                >
                  <div className={styles.trailerContainer}>
                    <ReactPlayer
                      url={item.trailer}
                    // playing={true}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default Banner;
