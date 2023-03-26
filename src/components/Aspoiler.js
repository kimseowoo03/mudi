import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

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
    <div>
      <h2>스포한장</h2>
      <div>
        {moviesData.map((movie) => {
          return (
            <div key={movie.id}>
              {/**img 임시로 넣어주시면 됩니다. */}
              <p>{movie.oneSentenceSpoiler}</p>
              <p>{movie.director}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aspoiler;
