import style from "../styles/Sidebar.module.scss";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import book from "../assets/book.png";
import movie from "../assets/movie.png";
import heart from "../assets/heart.png";

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
              <img src={home} alt="home_img"/>
              <span>홈</span>
            </a>
          </li>
          <li>
            <a href="{()=>false}">
              <img src={book} alt="book_img"/>
              <span>매거진</span>
            </a>
          </li>
          <li>
            <a href="{()=>false}">
              <img src={movie} alt="movie_img"/>
              <span>상영회</span>
            </a>
          </li>
          <li>
            <a href="{()=>false}">
              <img src={heart} alt="heart_img"/>
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
