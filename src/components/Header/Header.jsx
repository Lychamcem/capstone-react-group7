import React, { useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/slices/userSlice";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtnGroup,
  MDBIcon,
  MDBNavbarNav,
  MDBBtn,
} from "mdb-react-ui-kit";

function Header() {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = () => {
    // Chuyển sang trang /login
    navigate("/login");
  };

  const handleRegister = () => {
    // Chuyển sang trang /register
    navigate("/register");
  };

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken");
  };

  return (
    <header className={`${styles.header} fixed-top`}>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <Link to="/" className={`${styles.header__logo} ml-3 mt-2 mb-0`}>
            <img src="/image/logo-main.png" alt="logoMain" className="mb-0" />
          </Link>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler}>
            <MDBNavbarNav
              className={`mr-auto mb-2 mb-lg-0 ${styles.header__nav}`}
            >
              <MDBNavbarItem className={styles.header__item}>
                <MDBNavbarLink active aria-current="page" href="#">
                  Lịch chiếu
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className={styles.header__item}>
                <MDBNavbarLink href="#">Cụm rạp</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className={styles.header__item}>
                <MDBNavbarLink href="#news" to="/news">
                  Tin tức
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className={styles.header__item}>
                <MDBNavbarLink href="#">Ứng dụng</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBBtnGroup
              tag="form"
              className={`d-flex ${styles.form__buttonAll}`}
            >
              {user ? (
                <div className={styles.logout__content}>
                  <p>{user.hoTen}</p>
                  <MDBBtn
                    type="button"
                    outline
                    size="sm"
                    onClick={handleLogOut}
                  >
                    Đăng Xuất
                  </MDBBtn>
                </div>
              ) : (
                <div className={`d-flex ${styles.form__button}`}>
                  <MDBBtn
                    type="button"
                    outline
                    size="sm"
                    onClick={handleRegister}
                  >
                    Đăng Ký
                  </MDBBtn>

                  <MDBBtn
                    type="button"
                    outline
                    size="sm"
                    onClick={handleSignin}
                  >
                    Đăng nhập
                  </MDBBtn>
                </div>
              )}
            </MDBBtnGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default Header;
