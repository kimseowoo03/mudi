import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

import MovieItem from "./MovieItem";

import movie_poster from "../assets/movie_poster.jpeg";

import style from "../styles/FullMovie.module.scss";

const FullMovie = () => {
  const [moviesData, setMovieData] = useState([]);

  useEffect(()=>{

    //TODO: 영화 데이터들 불러오기
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "movies"));
      const moviesData = snapshot.docs.map((movie) => ({
      id: movie.id,
      ...movie.data(),
    }));
    setMovieData(moviesData);
    }
    fetchData();
},[]);

  return (
    <div className={style.container}>
      <h2>전체영화</h2>
      <div className={style.full_movie_contents}>
        {moviesData.map((movie, index) => {
          return <MovieItem key={index} movie={movie} poster={movie_poster} />;
        })}
      </div>
    </div>
  );
}

export default FullMovie;