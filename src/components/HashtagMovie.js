import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

import style from "../styles/HashtagMovie.module.scss"

import movie_poster from "../assets/movie_poster.jpeg";
import MovieItem from "./MovieItem";
import noMovieIcon from "../assets/no-data-icon.svg";

const hashtagGenres = ["전체","드라마", "코미디", "로맨스", "스릴러", "공포", "다큐", "액션", "서부극", "SF", "판타지" ]

const HashtagMovie = () => {
  const [moviesData, setMovieData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("전체")

  useEffect(()=>{
    const queryGetData = async () => {
      const movies = collection(db, "movies");
      const q = query(collection(db, "movies"), where("hashtag", "array-contains", selectedGenre))

      const querySnapshot = await getDocs(selectedGenre === "전체"?movies:q);
      const hashtagMoviesData = querySnapshot.docs.map((movie) => ({
      id: movie.id,
      ...movie.data(),
    }));
    setMovieData(hashtagMoviesData);
    }
    queryGetData();
},[selectedGenre]);

const genreItemClick = (event) => {
  const newSelectedGenre = event.target.textContent;
  setSelectedGenre(newSelectedGenre)
}

  // 전체 일 때, N일 때 두가지 데이터 불러오기
  return (
    <div className={style.hashtag_container}>
      <h2>{selectedGenre}</h2>
      <ul className={style.hashtagSelect}>
        {hashtagGenres.map((genre, index) => {
          return <li className={selectedGenre ===  genre ? style["hashtagItem-clicked"] :style.hashtagItem} onClick={genreItemClick} key={index}>{genre}</li>
        })}
      </ul>
      <div className={style.movie_contents}>
        {moviesData.length === 0 && 
          <div className={style.no_movie}>
            <img src={noMovieIcon} alt="no-movie-icon" />
            <p>볼 수 있는 영상이 없습니다 😥</p>
          </div>
        }
        {moviesData.map((movie, index) => {
          return <MovieItem key={index} movie={movie} poster={movie_poster} />
        })}
      </div>
    </div>
  )
}

export default HashtagMovie;