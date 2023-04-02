import style from '../styles/MobileHeader.module.scss';

import menu_icon from '../assets/icon-menu.svg';
import logo from '../assets/logo.png';

const MobileHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.hamberger_menu}>
        <img src={menu_icon} alt="menu-icon" />
      </div>
      <div className={style.logo}>
        <img src={logo} alt="logo-img" />
      </div>
    </div>
  )
}

export default MobileHeader;
