import React, { useEffect, useState } from 'react'
import styles from "./theaterName.module.scss";
import cls from "classnames";
import { Tabs } from 'antd';
import MovieList from '../MovieList/MovieList';
import { getShowTimeByCineIdAndGroupIdAPI } from '../../../Redux/Services/cineNameAPI';
import { toast } from 'react-toastify';

function TheaterName({ cineId, theaterList }) {
    const [movieList, setMovieList] = useState([]);
    const [complexCineId, setComplexCineId] = useState("");

    const getShowTimeByCineIdAndGroupId = async () => {
        try {
            const respone = await getShowTimeByCineIdAndGroupIdAPI(cineId);
            setMovieList(respone);
        } catch (error) {
            toast.error("Không lấy được thông tin lịch chiếu");
        }
    }

    useEffect(() => {
        if (cineId) {
            getShowTimeByCineIdAndGroupId();
        }
    }, []);

    return (
        <div className={cls("py-3", styles.theater__content)}>
            <Tabs
                tabPosition={"left"}
                items={theaterList.map((item, index) => {
                    const id = String(index + 1);
                    return {
                        label: (
                            <div className={cls("col-1", styles.theater__text)}>
                                <p>{item.tenCumRap}</p>
                                <span>{item.diaChi}</span>
                                <br />
                                <button onClick={() => {
                                    setComplexCineId(item.maCumRap)
                                }}>[ Chi tiết ]</button>
                            </div>
                        ),
                        key: id,
                        children: <MovieList complexCineId={complexCineId} movieList={movieList} />,
                    };
                })}
            />

        </div>
    );
}

export default TheaterName