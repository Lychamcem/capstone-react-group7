import React from 'react'
import styles from './MovieDetailsItem.module.scss';
import { useNavigate } from 'react-router-dom';


function MovieDetailsItem({ movieItem }) {
    const navigator = useNavigate();

    return (
        // <Slider {...settings}>
        //     {movies?.map((item) => {
        //         return (
        <div key={movieItem.maPhim}>
            <div className={styles.movieDetailsItem__List}>
                <div className={styles.movieDetailsItem__item}>
                    <img src={movieItem.hinhAnh} alt={movieItem.maPhim} />

                    <div className={styles.movieDetailsItem__title}>
                        <span>{movieItem.tenPhim}</span>
                    </div>
                    <div className={styles.movieDetailsItem__button}>
                        <button className='btn btn-primary mt-2' onClick={() => navigator(`/movies/${movieItem.maPhim}`)}>Mua vé</button>
                    </div>
                </div>
            </div>
        </div>
    )
    //     })}
    // </Slider>
    // )
}

export default MovieDetailsItem