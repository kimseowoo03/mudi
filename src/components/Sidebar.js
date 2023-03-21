import style from "../styles/Sidebar.module.scss";
function Sidebar() {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <a className={style.logo}></a>
        <ul>
          <li>
            <a>
              <i>icon</i>
              <p>홈</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
