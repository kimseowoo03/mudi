import style from "../styles/Banner.module.scss";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.left_content}>
        <div className={style.slider}>
          <ul className={style.slide_show}>
            <li id="slide01" className={style.slide}>
              <div className={style.snapper}></div>
            </li>
            <li id="slide02" className={style.slide}>
              <div className={style.snapper}></div>
            </li>
            <li id="slide03" className={style.slide}>
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
