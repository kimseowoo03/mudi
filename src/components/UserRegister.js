import { useRef, useState } from "react";

import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import style from "../styles/UserRegister.module.scss";

import backArrowIcon from "../assets/icon-backArrow.svg";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [producer, setProducer] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          console.log("비밀번호 6자리 이상")
          break;
        case "auth/invalid-email":
          console.log("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          console.log("이미 가입되어 있는 계정입니다");
          break;
      }
    }
  };

  return (
    <div className={style.register_container}>
      <div className={style.contents}>
        <div className={style.top_menu}>
          <img src={backArrowIcon} alt="backArrowIcon" />
        </div>
        <h2>회원가입</h2>
        <form onSubmit={submitHandler}>
          <div className={style.membership_type}>
            <input
              id="viewer"
              type="radio"
              name="membership"
              value="시청자"
              onChange={() => {
                setProducer("시청자");
              }}
            />
            <label htmlFor="viewer">시청자</label>
            <input
              id="producer"
              type="radio"
              name="membership"
              value="제작자"
              onChange={() => {
                setProducer("제작자");
              }}
            />
            <label htmlFor="producer">제작자</label>
          </div>
          <div className={`${style.email_input} ${style.item}`}>
            <label htmlFor="userEmail">이메일</label>
            <div className={style.email_duplication_check}>
              <input
                ref={emailRef}
                type="email"
                id="userEmail"
                placeholder="이메일을 입력하세요"
              />
              <button type="button">중복 확인</button>
            </div>
          </div>
          <div className={`${style.pw_input} ${style.item}`}>
            <label htmlFor="userPw">비밀번호</label>
            <input
              ref={passwordRef}
              type="password"
              id="userPw"
              placeholder="비밀번호를 입력하세요"
              autoComplete="off"
            />
          </div>
          <div className={`${style.pw_check_input} ${style.item}`}>
            <label htmlFor="userPwCheck">비밀번호 확인</label>
            <input
              ref={rePasswordRef}
              type="password"
              id="userPwCheck"
              placeholder="비밀번호를 재입력하세요"
              autoComplete="off"
            />
          </div>
          <button type="submit">
            확인
          </button>
        </form>
        <p>이미 계정이 있다면? <Link to="/login">로그인</Link>하기</p>
      </div>
    </div>
  );
};

export default UserRegister;