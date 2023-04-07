import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

import style from "../styles/HashtagMovie.module.scss"

import movie_poster from "../assets/movie_poster.jpeg";
import MovieItem from "./MovieItem";

const hashtagGenres = ["드라마", "코미디", "로맨스", "스릴러", "공포", "다큐", "액션", "서부극", "SF", "판타지" ]

const HashtagMovie = () => {
  const [moviesData, setMovieData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("전체")

  useEffect(()=>{
    //TODO: 영화 쿼리 사용해서 데이터들 불러오기
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
    <div>
      <h2>{selectedGenre}</h2>
      <ul>
        {hashtagGenres.map((genre, index) => {
          return <li onClick={genreItemClick} key={index}>{genre}</li>
        })}
      </ul>
      <div className={style.full_movie_contents}>
        {moviesData.length === 0 && <p>영화가 준비되지 않았습니다.</p>}
        {moviesData.map((movie, index) => {
          return <MovieItem key={index} movie={movie} poster={movie_poster} />
        })}
      </div>
    </div>
  )
}

export default HashtagMovie;