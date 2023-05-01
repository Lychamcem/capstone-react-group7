import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import BookingPage from "./pages/BookingPage/BookingPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:movieId" element={<MovieDetailsPage />} />
            <Route path="/booking/:showTimeId" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
