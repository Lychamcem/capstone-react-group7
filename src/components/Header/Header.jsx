import React, { useRef } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../Redux/slices/userSlice';


function Header() {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showTimesRef = useRef();
  const theaterClusterRef = useRef();
  const newsRef = useRef();
  const applicaionRef = useRef();

  const handleSignin = () => {
    // Chuyển sang trang /register
    navigate("/register");
  };

  const handleLogout = () => {
    // dispatch(logout());
    // localStorage.removeItem("user");
  };


  return (
    <header className={`${styles.header} fixed-top`}>
      <div className={styles.header__nav} id='nav-test'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light text-align-item-center'>
          <Link to='/' className={`${styles.header__logo} ml-3 mt-2 mb-0`}>
            <img src='../image/logo-main.png' alt='logoMain' className='mb-0' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div
            className={` ${styles.header__middle} collapse navbar-collapse`}
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav mt-0 ml-auto'>
              <li className='nav-item '>
                <Link
                  className='nav-link text-left text-md-center'
                  to='#'
                  href='#'
                  onClick={() => {
                    showTimesRef.current.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Lịch chiếu
                </Link>
              </li>
              <li className='nav-item  '>
                <Link
                  className='nav-link text-left text-md-center'
                  to='#'
                  href='#'
                  onClick={() => {
                    document
                      .getElementById('cumRap')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Cụm rạp{' '}
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  className='nav-link text-left text-md-center'
                  to='#'
                  href='#'
                // onClick={() => {
                //   document
                //     .getElementById('tinTuc')
                //     .scrollIntoView({ behavior: 'smooth' });
                // }}
                >
                  Tin tức{' '}
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  className='nav-link text-left text-md-center'
                  to='#'
                  href='#'
                // onClick={() => {
                //   document
                //     .getElementById('ungDung')
                //     .scrollIntoView({ behavior: 'smooth' });
                // }}
                >
                  Ứng dụng
                </Link>
              </li>
              {/* <li
                className='nav-item login  text-left text-md-center'
                id='lg'
              >
                 <NavLink to='/auth-home'>
                  {login === 'Đăng nhập' ? 'Đăng nhập' : `Xin chào ${login}`}
                </NavLink> 
                <div
                  className='dropdown-content'
                  style={{ background: 'white' }}
                >
                  <button
                    className='btn logout'
                    // onClick={handleLogOut}
                    style={{ textAlign: 'left' }}
                  >
                    Đăng Xuất
                  </button>{' '}
                </div>
              </li> */}
            </ul>
          </div>

          <div className='btn logout' style={{ marginLeft: "auto", display: "flex" }}>
            {user ? (
              <>
                <p>{user.hoTen}</p>
                <button className='btn btn-gray' onClick={handleLogout}>Đăng Xuất</button>
              </>
            ) : (
              <button onClick={handleSignin}>Đăng Nhập</button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header