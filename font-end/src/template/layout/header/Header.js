import "./Header.css"
import logo from "../../../image/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import avt from "../../../image/unnamed.jpg";
function Header() {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") != null);
    window.addEventListener('storage', () => {
        if (localStorage.getItem("accessToken") != null) {
            setAccessToken(true)
        }
    });
    const Logout = () => {
        localStorage.removeItem("accessToken")
        setAccessToken(false);

    }
    return (
        <>
            <div className="header_page">
                <div className="header">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="menu">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Trang chủ <span
                                            class="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">Giới thiệu</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="/shop">Sản Phẩm</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="icon_menu">
                        <div className="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div>
                            {accessToken ? (
                                <div className='user_icon'>
                                    <img src={avt} className="img_default"></img>
                                    <div className="user_dropdown">
                                        <Link to="/profile">Profile</Link>
                                        <Link onClick={Logout}>Logout</Link>
                                    </div>
                                </div>
                            ) : (
                                <div className='user_icon1'>
                                    <Link to="/login">
                                        <i class="fas fa-user-plus"></i>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="cart">
                            <a href="/cart" class="notification">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span class="badge">0</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;