import React from 'react'
import styles from './MovieDetailsItem.module.scss';
import { useNavigate } from 'react-router-dom';


function MovieDetailsItem({ movieItem }) {
    const navigator = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <Slider {...settings}>
            {movieItem?.map((item) => {
                return (
                    <div key={item.maPhim}>
                        <div className={styles.movieDetailsItem__List}>
                            <div className={styles.movieDetailsItem__item}>
                                <img src={item.hinhAnh} alt={item.maPhim} />

                                <div className={styles.movieDetailsItem__title}>
                                    <span>{item.tenPhim}</span>
                                </div>
                                <div className={styles.movieDetailsItem__button}>
                                    <button className='btn btn-primary mt-2' onClick={() => navigator(`/movies/${item.maPhim}`)}>Mua vé</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default MovieDetailsItem