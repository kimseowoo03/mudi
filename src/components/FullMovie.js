import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

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
    <div>
      <h2>전체영화</h2>
      <div>
        {moviesData.map((movie)=> {
          return (
            <div key={movie.id}>
              {/**이미지 div추가해주시면 됩니다. */}
              <p>{movie.title}</p>
              <span>{movie.comeOut}-{movie.director} 감독</span>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default FullMovie;