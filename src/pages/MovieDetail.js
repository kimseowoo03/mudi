import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';

const MovieDetail = () => {
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
    <div>상세페이지입니다. 영화는{moviesData.title}</div>
  )
}

export default MovieDetail;