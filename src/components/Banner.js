import style from "../styles/Banner.module.scss";

import bannerImg01 from '../assets/banner01.png';
import bannerImg02 from '../assets/banner02.png';
import bannerImg03 from '../assets/banner03.png';

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.left_content}>
        <div className={style.slider}>
          <ul className={style.slide_show}>
            <li id="slide01" className={style.slide}>
              <img src={bannerImg01} alt="bannerImage01" />
              <div className={style.snapper}></div>
            </li>
            <li id="slide02" className={style.slide}>
              <img src={bannerImg02} alt="bannerImage02" />
              <div className={style.snapper}></div>
            </li>
            <li id="slide03" className={style.slide}>
              <img src={bannerImg03} alt="bannerImage03" />
              <div className={style.snapper}></div>
            </li>
          </ul> 
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
