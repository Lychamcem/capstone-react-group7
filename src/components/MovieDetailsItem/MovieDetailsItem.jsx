import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router';
import styles from "./movieDetailsItem.module.scss";


function MovieDetailsItem({ movieItem }) {
    const navigator = useNavigate();

    return (
        <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
            <div className="card-body">
                <div className={styles.movieDetails__item}>
                    <LazyLoadImage
                        className="img-fluid"
                        src={movieItem.hinhAnh}
                        alt={movieItem.maPhim}
                    />

                    <div className={styles.movieDetails__title}>
                        <h5>{movieItem.tenPhim}</h5>
                        <p>{movieItem.moTa}</p>
                    </div>

                    <div className={styles.movieDetails__button}>
                        <button
                            className="btn btn-primary mt-2"
                            onClick={() => navigator(`/details/${movieItem.maPhim}`)}
                        >
                            Mua vé
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsItem