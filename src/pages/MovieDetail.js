import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import style from "../styles/MovieDetail.module.scss";
import IframeComponent from "../components/IframeComponent";

import backIcon from "../assets/icon-backArrow.svg";
import wishIcon from "../assets/icon-heartInfo.svg";
import shareIcon from "../assets/icon-share.svg";
import supportIcon from "../assets/icon-donate.svg";
import stillCutImg01 from "../assets/stillcut01.png";
import stillCutImg02 from "../assets/stillcut02.png";
import stillCutImg03 from "../assets/stillcut03.png";

const MovieDetail = () => {
  const [moviesData, setMovieData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const docSnap = await getDoc(doc(db, "movies", id));
      setMovieData(docSnap.data());
    };
    fetchMovie();
  }, [id]);

  return (
    <div className={style.movieDetail_container}>
      <div className={style.top_menu}>
        <img src={backIcon} alt="backIcon" />
      </div>
      <div className={style.movie_contents}>
        <div className={style.movie_content}>
          <IframeComponent url={"https://www.youtube.com/embed/5CQ_iInQnWQ"}/>
        </div>
        <div className={style.stillCut_content}>
          <ul>
            <li>
              <img src={stillCutImg01} alt="stillCutImg01" />
            </li>
            <li>
              <img src={stillCutImg02} alt="stillCutImg02" />
            </li>
            <li>
              <img src={stillCutImg03} alt="stillCutImg03" />
            </li>
          </ul>
        </div>
      </div>
      <div className={style.movieInfo_otherMenu}>
        <div className={style.movie_Info}>
          <div className={style.movie_title}>
            <h2>{moviesData.title}</h2>
          </div>
          <div className={style.movie_basicInfo}>
            <ul>
              <li>{moviesData.titleEng}</li>
              <li>{moviesData.comeOut}</li>
              <li>
                {moviesData.availableAge
                  ? `${moviesData.availableAge}세`
                  : "전체"}
              </li>
              <li>{moviesData.runningTime}분</li>
            </ul>
          </div>
          <div className={style.movie_hashtag}>
            <ul>
              {moviesData.hashtag &&
                moviesData.hashtag.map((tag, index) => {
                  return <li key={index}>#{tag}</li>;
                })}
            </ul>
          </div>
          <div className={style.director_acting}>
            <p>출연: {moviesData.actors}</p>
            <p>감독: {moviesData.director}</p>
          </div>
          <div className={style.movie_summary}>
            <h2>줄거리</h2>
            <p>{moviesData.summary}</p>
            <input type="checkbox" className={style.moreView_btn} />
          </div>
        </div>
        <div className={style.movie_otherMenu}>
          <button type="button" className={style.wish_btn}>
            <img src={wishIcon} alt="wishIcon" />
          </button>
          <button type="button" className={style.share_btn}>
            <img src={shareIcon} alt="shareIcon" />
          </button>
          <button type="button" className={style.support_btn}>
            <img src={supportIcon} alt="supportIcon" />
            <span>창작자에게 후원하기</span>
          </button>
        </div>
      </div>
      <div className={style.qna_photo_tabMenu}>
        <input
          type="radio"
          name="tabs"
          id="tab1"
          className={style.tab1}
          defaultChecked={true}
        />
        <label htmlFor="tab1">Q&A</label>
        <input type="radio" name="tabs" id="tab2" className={style.tab2} />
        <label htmlFor="tab2">포토</label>
        <div id="content1" className={`${style.tab_content} ${style.qna}`}>
          Q&A 기능 추가 예정입니다.
        </div>
        <div id="content2" className={`${style.tab_content} ${style.photo}`}>
          포토 기능 추가 예정입니다.
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
