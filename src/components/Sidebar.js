import style from "../styles/Sidebar.module.scss";
import logo from "../assets/logo.png";
import home_icon from "../assets/icon-Home.svg";
import magazine_icon from "../assets/icon-Magazine.svg";
import cinema_icon from "../assets/icon-cinema.svg";
import wishlist_icon from "../assets/icon-wishlist.svg";

function Sidebar() {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.logo}>
          <a href="{()=>false}">
            <img src={logo} alt="mudi_logo"/>
          </a>
        </div>
        <ul className={style.nav}>
          <li>
            <a href="{()=>false}">
              <img src={home_icon} alt="home_icon"/>
              <span>홈</span>
            </a>
          </li>
          <li>
            <a href="{()=>false}">
              <img src={magazine_icon} alt="magazine_icon"/>
              <span>매거진</span>
            </a>
          </li>
          <li>
            <a href="{()=>false}">
              <img src={cinema_icon} alt="cinema_icon"/>
              <span>상영회</span>
            </a>
          </li>
          <li>
            <a href="{()=>false}">
              <img src={wishlist_icon} alt="wishlist_icon"/>
              <span>위시리스트</span>
            </a>
          </li>
        </ul>
        <div className={style.profile}> 
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
