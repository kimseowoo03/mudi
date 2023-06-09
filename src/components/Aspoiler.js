import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

import movie_spoiler from "../assets/movie_spoiler.jpg";

import style from "../styles/Aspoiler.module.scss";

const Aspoiler = () => {
  const [moviesData, setMovieData] = useState([]);

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
    <div className={style.spo_container}>
      <h2>스포한장</h2>
      <div className={style.spo_contents}>
        {moviesData.map((movie) => {
          return (
            <div key={movie.id} className={style.item}>
              <Link to={movie.id}>
                <img src={movie_spoiler} alt="movie_spoiler_image" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aspoiler;
