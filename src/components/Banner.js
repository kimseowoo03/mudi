import style from "../styles/Banner.module.scss";

import banner01 from "../assets/banner01.png";
import banner02 from "../assets/banner02.png";
import banner03 from "../assets/banner03.png";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.left_content}>
        <div className={style.slider}>
          <ul className={style.slide_show}>
            <li id="slide01" className={style.slide}>
              <img src={banner01} alt="banner_image_01" />
              <div className={style.snapper}></div>
            </li>
            <li id="slide02" className={style.slide}>
              <img src={banner02} alt="banner_image_02" />
              <div className={style.snapper}></div>
            </li>
            <li id="slide03" className={style.slide}>
              <img src={banner03} alt="banner_image_03" />
              <div className={style.snapper}></div>
            </li>
          </ul> 
          <div className={style.slide_nav}>
            <ul className={style.slide_btn_list}>
              <li className={style.slide_btn_item}>
                <a href="#slide01" className={style.slide_btn}></a>
              </li>
              <li className={style.slide_btn_item}>
                <a href="#slide02" className={style.slide_btn}></a>
              </li>
              <li className={style.slide_btn_item}>
                <a href="#slide03" className={style.slide_btn}></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.right_content}>
        <div className={style.support}></div>
        <div className={style.view_rank}></div>
      </div>
    </div>
  );
};

export default Banner;
