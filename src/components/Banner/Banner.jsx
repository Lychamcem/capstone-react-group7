import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import styles from "./Banner.module.scss";

import { getBannersAPI } from '../../Redux/Services/moviesAPI';
import ModalTrailer from '../ModalTrailer/ModalTrailer';

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
    }

    useEffect(() => {
        getBanners();
    }, []);

    if (error) return null;

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className={styles.banner}>
            <Slider {...settings}>
                {banners?.map((item) => {
                    return (
                        <div key={item.maBanner} className={styles.banner__inner}>
                            <img src={item.hinhAnh} alt={item.maBanner} className="img-fluid" />

                            <div className={styles.banner__trailer}>
                                <a href='#' data-lity><i className="fa fa-play" /></a>
                                <ModalTrailer
                                    trailer={item.trailer}
                                    maPhim={item.maPhim}
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section>
    );
}

export default Banner