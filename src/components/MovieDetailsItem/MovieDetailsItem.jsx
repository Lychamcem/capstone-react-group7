import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router';
import styles from "./movieDetailsItem.module.scss";
import ReactPlayer from 'react-player';


function MovieDetailsItem({ movieItem }) {
    const navigator = useNavigate();
    const [showTrailer, setShowTrailer] = useState(false);

    return (
        <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
            <div className="card-body">
                <div className={styles.movieDetails__item}>
                    <LazyLoadImage
                        className='img-fluid'
                        src={movieItem.hinhAnh}
                        alt={movieItem.maPhim}
                    />

                    <div className={styles.banner__trailer} onClick={() => setShowTrailer(true)}>
                        <a href="#" data-lity>
                            <i className="fa fa-play" />
                        </a>
                    </div>

                    <div className={styles.movieDetails__title}>
                        <h5>{movieItem.tenPhim}</h5>
                        <p>{movieItem.moTa}</p>
                    </div>

                    <div className={styles.movieDetails__button}>
                        <button
                            className="btn mt-2"
                            onClick={() => navigator(`/details/${movieItem.maPhim}`)}
                        >
                            Mua vé
                        </button>
                    </div>
                </div>
                {showTrailer && movieItem.trailer && (
                    <div
                        className={styles.trailerPopup}
                        onClick={() => setShowTrailer(false)}
                    >
                        <div className={styles.trailerContainer}>
                            <ReactPlayer
                                url={movieItem.trailer}
                                playing={true}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MovieDetailsItem