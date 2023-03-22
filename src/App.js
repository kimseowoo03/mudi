import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

import style from "./styles/App.module.scss"
function App() {
  return (
    <div className={style.container}>
      <Sidebar />
      <Home />
      </div>
  );
}

export default App;
