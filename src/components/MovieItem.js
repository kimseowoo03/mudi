import style from '../styles/MovieItem.module.scss'

const MovieItem = ({movie, poster}) => {
  return (
    <div className={style.movieItem}>
      <img src={poster} alt="movie_poster_image" />
      <div className={style.movie_info}>
        <div className={style.info_text}>
          <p>{movie.title}</p>
          <span>
            {movie.comeOut}-{movie.director} 감독
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;