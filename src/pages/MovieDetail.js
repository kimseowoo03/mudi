import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import style from '../styles/MovieDetail.module.scss';
import IframeComponent from '../components/IframeComponent';

const MovieDetail = () => {
  const [videoClick, setVideoClick] = useState(false);
  const [moviesData, setMovieData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const docSnap= await getDoc(doc(db, "movies", id))
      setMovieData(docSnap.data())
    }
    fetchMovie()
  },[id])

  return (
    <div className={style.container}>
      <div className={style.container_bg_img}>
        <div className={style.top_menu}></div>
        <div className={style.movie_contents}>
          <div className={style.movie_content}>
          {videoClick && 
              <div style={{position: "fixed", top: "0", left: "0", width: "100%", height: "100%", zIndex: "9999", }}>
                <IframeComponent url={moviesData.url}/>
              </div>
              }
            <div className={style.play_btn}>
              <button onClick={()=> {setVideoClick(!videoClick)}} />
            </div>
          </div>
          <div className={style.movie_poster_content}></div>
        </div>
      </div>
      <div className={style.movieInfo_otherMenu}>
        <div className={style.movie_moreInfo}>
          <div className={style.movie_title}>
            <h2>{moviesData.title}</h2>
          </div>
          <div className={style.movie_basicInfo}>
            <ul>
              <li>{moviesData.titleEng}</li>
              <li>{moviesData.comeOut}</li>
              <li>{moviesData.availableAge ? `${moviesData.availableAge}세` : "전체"}</li>
              <li>{moviesData.runningTime}분</li>
            </ul>
          </div>
          <div className={style.movie_hashtag}>
            <ul>
              {moviesData.hashtag && moviesData.hashtag.map((tag, index)=> {
                return <li key={index}>#{tag}</li>
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
            <input type="checkbox" className={style.movie_summary_more_btn} />
          </div>
        </div>
        <div className={style.movie_otherMenu}>
          <div className={style.wish_btn}></div>
          <div className={style.share_btn}></div>
          <div className={style.support_btn}></div>
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
        <label htmlFor='tab1'>Q&A</label>
        <input type="radio" name="tabs" id="tab2" className={style.tab2} />
        <label htmlFor='tab2'>포토</label>
        <div id="content1" className={`${style.tab_content} ${style.qna}`}>
          Q&A 기능 추가 예정입니다.
        </div>
        <div id="content2" className={`${style.tab_content} ${style.photo}`}>
          포토 기능 추가 예정입니다.
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;