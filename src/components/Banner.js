import style from "../styles/Banner.module.scss";

import bannerImg01 from '../assets/camellia-banner.jpg';
import bannerImg02 from '../assets/windnoise-banner.jpg';

const Banner = () => {
  return (
    <div className={style.banner_container}>
      <div className={style.left_contents}>
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
          </ul> 
        </div>
      </div>
      <div className={style.right_contents}>
        <div className={style.support}></div>
        <div className={style.view_rank}></div>
      </div>
    </div>
  );
};

export default Banner;
