import { create } from "zustand";

const useStore = create((set) => ({
  movieId: "",
  setMovieId: (selectMovieId) => set({movieId: selectMovieId})
}));

export default useStore;
