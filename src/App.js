import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MovieDetail from './pages/MovieDetail';

import style from "./styles/App.module.scss"
function App() {

  return (
    <BrowserRouter>
    <div className={style.container}>
    <Sidebar />
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<MovieDetail />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
