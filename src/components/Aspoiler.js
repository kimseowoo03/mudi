import { useEffect, useState } from "react";
import useStore from "../store/useStore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

import movie_spoiler from "../assets/movie_spoiler.jpg";

import style from "../styles/Aspoiler.module.scss";

const Aspoiler = () => {
  const { movieId, setMovieId } = useStore();
  const [moviesData, setMovieData] = useState([]);

  const handleMovieClick = (id) => {
    setMovieId(id);
  }

  useEffect(() => {
    //TODO: 영화 데이터들 불러오기
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "movies"));
      const moviesData = snapshot.docs.map((movie) => ({
        id: movie.id,
        ...movie.data(),
      }));
      setMovieData(moviesData);
    };
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <h2>스포한장</h2>
      <div className={style.spoiler_contents}>
        {moviesData.map((movie) => {
          return (
            <div key={movie.id} className={style.spoiler_content} onClick={() => {handleMovieClick(movie.id)}}>
              <img src={movie_spoiler} alt="movie_spoiler_image" />
              <div className={style.spoiler_text}>
                <p>{movie.oneSentenceSpoiler}</p>
                <p>{movie.director}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aspoiler;
