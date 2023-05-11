import axiosClient from "../../config/axiosClient";

export const getMoviesAPI = async () => {
    const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {
        params: {
            maNhom: "GP07",
        }
    });
    return data;
}
