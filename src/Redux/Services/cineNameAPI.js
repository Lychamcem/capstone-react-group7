import axiosClient from "../../config/axiosClient";
export async function cineName() {
  try {
    const response = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getShowTimeRequest(movieId) {
  try {
    const response = await axiosClient.get(
      `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}
