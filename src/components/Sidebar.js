import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import { useWindowSize } from "../hooks/useWindowSize";

import NavItem from "./NavItem";

import style from "../styles/Sidebar.module.scss";

import logo from "../assets/logo.png";
import home_icon from "../assets/icon-Home.svg";
import magazine_icon from "../assets/icon-Magazine.svg";
import cinema_icon from "../assets/icon-cinema.svg";
import wishlist_icon from "../assets/icon-wishlist.svg";
import close_icon from "../assets/icon-x.svg";
import user_profile from "../assets/user_profile.png";

const NavItemsData = [
  {
    src: home_icon,
    alt: "home_icon",
    nav_name: "홈",
    link_to: "/",
  },
  {
    src: magazine_icon,
    alt: "magazine_icon",
    nav_name: "매거진",
    link_to: false,
  },
  {
    src: cinema_icon,
    alt: "cinema_icon",
    nav_name: "상영회",
    link_to: false,
  },
  {
    src: wishlist_icon,
    alt: "home_icon",
    nav_name: "위시리스트",
    link_to: false,
  },
];

const Sidebar = () => {
  const { width } = useWindowSize();
  const { sidebarActive, setSidebarActive } = useStore();

  useEffect(() => {
    if (sidebarActive && width <= 700) {
      console.log("700");
      setSidebarActive();
    }
  }, [width]);

  const sidebarClass = sidebarActive ? style.containerActive : style.container;

  return (
    <div className={sidebarClass}>
      <div className={style.sidebar}>
        <div className={style.close_btn}>
          <img
            src={close_icon}
            alt="close_icon"
            onClick={() => {
              setSidebarActive();
            }}
          />
        </div>
        <div className={style.logo}>
          <Link to="/">
            <img src={logo} alt="mudi_logo" />
          </Link>
        </div>
        <ul className={style.nav}>
          {NavItemsData.map((data, index) => {
            return <NavItem key={index} data={data} />;
          })}
        </ul>
        <div className={style.profile}>
          <div className={style.profile_detail}>
            <img src={user_profile} alt="user_profile_image" />
            <p>
              <Link to="/login">로그인</Link>을 해주세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
