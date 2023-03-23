import NavItem from "./NavItem";

import style from "../styles/Sidebar.module.scss";

import logo from "../assets/logo.png";
import home_icon from "../assets/icon-Home.svg";
import magazine_icon from "../assets/icon-Magazine.svg";
import cinema_icon from "../assets/icon-cinema.svg";
import wishlist_icon from "../assets/icon-wishlist.svg";

const NavItemsData = [
  {
    src: home_icon,
    alt: "home_icon",
    nav_name: "홈",
  },
  {
    src: magazine_icon,
    alt: "magazine_icon",
    nav_name: "매거진",
  },
  {
    src: cinema_icon,
    alt: "cinema_icon",
    nav_name: "상영회",
  },
  {
    src: wishlist_icon,
    alt: "home_icon",
    nav_name: "위시리스트",
  },
];

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.logo}>
          <a href="{()=>false}">
            <img src={logo} alt="mudi_logo" />
          </a>
        </div>
        <ul className={style.nav}>
          {NavItemsData.map((data, index) => {
            return <NavItem key={index} data={data} />;
          })}
        </ul>
        <div className={style.profile}></div>
      </div>
    </div>
  );
};

export default Sidebar;