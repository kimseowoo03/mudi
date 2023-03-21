import style from "../styles/Sidebar.module.scss";
function Sidebar() {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <a href="{()=>false}" className={style.logo}>
          해결
        </a>
        <ul>
          <li>
            <a href="{()=>false}">
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
