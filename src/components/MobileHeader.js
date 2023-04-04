import useStore from '../store/useStore';
import style from '../styles/MobileHeader.module.scss';

import menu_icon from '../assets/icon-menu.svg';
import logo from '../assets/logo.png';

const MobileHeader = () => {
  const {setSidebarActive} = useStore();

  return (
    <div className={style.container}>
      <div className={style.hamberger_menu} onClick={()=> {setSidebarActive()}}>
        <img src={menu_icon} alt="menu-icon" />
      </div>
      <div className={style.logo}>
        <img src={logo} alt="logo-img" />
      </div>
    </div>
  )
}

export default MobileHeader;
