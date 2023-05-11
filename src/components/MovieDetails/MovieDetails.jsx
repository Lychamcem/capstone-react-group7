import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './movieDetails.module.scss';

import { getMoviesAPI } from '../../Redux/Services/moviesAPI';
import Slider from 'react-slick';

function MovieDetails() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const navigator = useNavigate();

    const getMovies = async () => {
        try {
            const data = await getMoviesAPI();
            setMovies(data.content);
        } catch (error) {
            console.log(error);
        }
    }

    const [search, setSearch] = useState("");
    const [searchParam] = useState(["tenPhim"]);

    const handleChange = (evt) => {
        setSearch(evt.target.value);
    };

    useEffect(() => {
        getMovies();
    }, []);

    if (error) return null;

    function Search(movies) {
        return movies.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem].toString().toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            });
        });
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <div className={styles.movieDetails}>
            <div className="container">
                <div className={`${styles.movieDetails__top} mt-4`}>
                    <div className="input-group mb-3">
                        <input
                            id="txtSearch"
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ khóa"
                            value={search}
                            onChange={handleChange}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <button className='btn btn-primary p-2'><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <Slider {...settings}>
                    {Search(movies)?.map((item) => {
                        return (
                            <div key={item.maPhim} className={styles.movieDetails__bottom}>
                                <div className={styles.movieDetails__List}>
                                    <div className={styles.moviewDetails__item}>
                                        <img src={item.hinhAnh} alt={item.maPhim} />

                                        <div className={styles.movieDetails__title}>
                                            <span>{item.tenPhim}</span>
                                        </div>
                                        <div className={styles.movieDetails__button}>
                                            <button className='btn btn-primary mt-2' onClick={() => navigator(`/details/${item.maPhim}`)}>Mua vé</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div>
        </div >
    )
}

export default MovieDetails



