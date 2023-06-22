import { useRef } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import style from "../styles/UserLogin.module.scss";
import backArrowIcon from "../assets/icon-backArrow.svg";
import whiteLogo from "../assets/logo_white.svg";

const UserLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          console.log("일치하는 사용자를 찾을 수 없음");
          break;
        case "auth/wrong-password":
          console.log("일치하지 않는 비밀번호");
          break;
      }
    }
  };

  return (
    <div className={style.login_container}>
      <div className={style.contents}>
        <div className={style.top_menu}>
          <img src={backArrowIcon} alt="backArrowIcon" />
        </div>
        <h2>로그인</h2>
        <div className={style.logo}>
          <img src={whiteLogo} alt="logo" />
        </div>
        <p><strong>인디 무비</strong>보러 <strong>무디</strong>로<br />가는거 어떤디?</p>
        <form onSubmit={submitHandler} autoComplete="off">
          <div className={`${style.email_input} ${style.item}`}>
            <label htmlFor="userEmail">이메일</label>
            <input type="email" id="userEmail" placeholder="이메일을 입력하세요" ref={emailRef} />
          </div>
          <div className={`${style.pw_input} ${style.item}`}>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" id="userPw" placeholder="비밀번호를 입력하세요" ref={passwordRef} />
          </div>
          <label htmlFor="keepLogin">
            <input type="checkbox" id="keepLogin" />로그인 상태 유지
          </label>
          <button type="submit">로그인</button>
        </form>
        <button type="button" className={style.signUpBtn}>회원가입</button>
      </div>
    </div>
  );
};

export default UserLogin;
