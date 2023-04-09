import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MovieDetail from './pages/MovieDetail';

import style from "./styles/App.module.scss"
import Register from './pages/Register';
function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className={style.container}>
    <Sidebar />
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<MovieDetail />}/>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
