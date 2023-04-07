import style from '../styles/Footer.module.scss';

import footerLogo from '../assets/logo_white.svg';
import instagramIcon from '../assets/instagram.svg';
import vimeoIcon from '../assets/vimeo-v.svg';
import youtubeIcon from '../assets/youtube.svg';

const Footer = () => {
  return (
  <div className={style.footer}>
    <div className={style.logo}>
      <img src={footerLogo} alt="footerLogo" />
    </div>
    <div className={style.footerMenu}>
      <ul>
        <li>정보</li>
        <li><a href="{() => false}">서비스 소개</a></li>
        <li><a href="{() => false}">팀 소개</a></li>
        <li><a href="{() => false}">이용약관</a></li>
      </ul>
      <ul>
        <li>업로드 신청</li>
        <li><a href="{() => false}">업로드 가이드</a></li>
        <li><a href="{() => false}">신청하기</a></li>
      </ul>
      <ul>
        <li>Connect</li>
        <li>
          <span>Call</span><span>010 - 0000 - 0000</span>
        </li>
        <li>
          <span>Email</span><span>moveit@gmail.com</span>
        </li>
      </ul>
    </div>
    <div className={style.snsMenu}>
      <div className={style.instagram}>
        <a href="{() => false}"><img src={instagramIcon} alt="instagramIcon" /></a>
      </div>
      <div className={style.vimeo}>
        <a href="{() => false}"><img src={vimeoIcon} alt="vimeoIcon" /></a>
      </div>
      <div className={style.youtube}>
        <a href="{() => false}"><img src={youtubeIcon} alt="youtubeIcon" /></a>
      </div>
    </div>
  </div>
  )
}

export default Footer;